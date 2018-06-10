Types::MutationType = GraphQL::ObjectType.define do

  name 'Mutation'
  field :updateGatewayMutation, field: Mutations::UpdateGatewayMutation.field

end
