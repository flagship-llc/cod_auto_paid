class OrdersCreateJob < ActiveJob::Base
  queue_as :default

  def perform(shop_domain:, webhook:)
    shop = Shop.find_by(shopify_domain: shop_domain)
    shop.with_shopify_session do
      puts webhook['gateway']
      return unless webhook['gateway'] == "Cash on Delivery (COD)" || webhook['gateway'].include?('代金')

      order_id = webhook['id']
      shopify_order_transactions = ShopifyAPI::Transaction.find(:all, params: { order_id: order_id })&.to_a
      shopify_parent_transaction = (shopify_order_transactions || []).select { |t| t.kind == 'authorization' }.last

      capture_transaction_record = {
      kind: 'capture',
      order_id: order_id,
      parent_id: shopify_parent_transaction&.id,
      authorization: shopify_parent_transaction&.authorization
      }

      ShopifyAPI::Transaction.create(capture_transaction_record)
    end
  end
end
