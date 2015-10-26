class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :goal_name
      t.string :goal_desc
      t.string :icon_url
      t.boolean :is_public

      t.timestamps null: false
    end
  end
end
