class AddUsernameAndAddressToGardeners < ActiveRecord::Migration[5.0]
  def change
    add_column :gardeners, :username, :string
    add_column :gardeners, :address, :string
  end
end
