class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :meal
      t.string :directions
      # t.integer :_id # this is our foreign key
      t.timestamps
    end
  end
end