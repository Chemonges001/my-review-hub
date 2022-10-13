class AddToCocktailtable < ActiveRecord::Migration[6.1]
  def change
    add_column :cocktails, :user_id, :integer
  end
end
