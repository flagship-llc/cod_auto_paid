class V1::GraphqlController < ShopifyApp::AuthenticatedController
  protect_from_forgery with: :null_session
  
  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]

    @shop = ShopifyAPI::Shop.current
    @shop_info = Shop.where(shopify_domain: @shop.myshopify_domain).first

    context = {
      current_shop: @shop_info
    }
    result = CodAutoPaidSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
