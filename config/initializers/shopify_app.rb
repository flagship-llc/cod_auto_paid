ShopifyApp.configure do |config|
  config.application_name = "COD AUTO PAID"
  config.api_key = ENV['SHOPIFY_API_KEY']
  config.secret = ENV['SHOPIFY_API_SECRET']
  config.scope = "read_orders, write_orders"
  config.embedded_app = true
  config.after_authenticate_job = false
  config.session_repository = Shop
  config.webhooks = [
    {topic: 'orders/create', address: "https://#{ENV['HOSTNAME']}/webhooks/orders_create", format: 'json'}
  ]
  config.api_version = '2019-10'
end
