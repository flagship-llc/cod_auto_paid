Types::UpdateGatewayInputType = GraphQL::InputObjectType.define do
  name 'UpdateGateway'
  argument :gateway_name, !types.String
end
