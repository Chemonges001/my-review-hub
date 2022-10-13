class AddToCocktailtble < ActiveRecord::Migration[6.1]
  def change
    add_column :cocktails, :description, :string
  end
end
