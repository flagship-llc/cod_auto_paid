class OrdersCreateJob < ActiveJob::Base
  queue_as :default

  def perform(shop_domain:, webhook:)
    shop = Shop.find_by(shopify_domain: shop_domain)
    shop.with_shopify_session do
    	puts webhook['gateway']
    	if webhook['financial_status'] == "pending" and webhook['gateway'] == "Cash on Delivery (COD)" || webhook['gateway'].include?('代金')
		    ShopifyAPI::Transaction.create({order_id: webhook['id'], kind: 'capture'})
    	end
    end
  end
end
