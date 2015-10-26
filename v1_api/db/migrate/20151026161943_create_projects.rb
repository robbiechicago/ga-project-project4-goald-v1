class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.integer :goal_id

      t.timestamps null: false
    end
  end
end
