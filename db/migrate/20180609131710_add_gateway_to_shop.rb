class AddGatewayToShop < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :gateway_name, :string
  end
end
