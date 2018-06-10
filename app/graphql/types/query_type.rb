class Types::QueryType < Types::BaseObject
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  Types::QueryType = GraphQL::ObjectType.define do
  	name "Query"

	field :shop do
		type Types::ShopType
		resolve ->(obj, args, ctx) {
		  Shop.find(ctx[:current_shop].id)
		}
	end
  end

end
