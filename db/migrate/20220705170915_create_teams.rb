class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.integer :user_id
      t.string :name
      t.string :image
      t.string :location
      t.string :webpage

      t.timestamps
    end
  end
end
