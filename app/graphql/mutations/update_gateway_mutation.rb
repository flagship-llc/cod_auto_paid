class Mutations::UpdateGatewayMutation < GraphQL::Schema::RelayClassicMutation
  Mutations::UpdateGatewayMutation = GraphQL::Relay::Mutation.define do
	  name 'UpdateGateway'

	  input_field :gateway_name, !types.String
	  return_field :shop, Types::ShopType

	  resolve ->(_obj, inputs, ctx) {
	    begin
	      shop = Shop.find(ctx[:current_shop].id)
	      shop.gateway_name = inputs.gateway_name
	      shop.save
	    rescue => e
	      return GraphQL::ExecutionError.new(e.message)
	    end

	    { shop: shop }
	  }

	end
end
