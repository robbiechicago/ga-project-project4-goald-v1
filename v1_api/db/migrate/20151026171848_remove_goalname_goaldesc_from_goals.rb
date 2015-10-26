class RemoveGoalnameGoaldescFromGoals < ActiveRecord::Migration
  def change
    remove_column :goals, :goal_name, :string
    remove_column :goals, :goal_desc, :string
  end
end
