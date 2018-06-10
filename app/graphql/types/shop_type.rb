Types::ShopType = GraphQL::ObjectType.define do
  name "Shop"
  backed_by_model :shops do
    attr :gateway_name
  end

  field :gateway_name, !types.String
end
