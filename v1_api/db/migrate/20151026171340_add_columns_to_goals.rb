class AddColumnsToGoals < ActiveRecord::Migration
  def change
    add_column :goals, :more_less, :string
    add_column :goals, :category, :string
    add_column :goals, :goal_thing, :string
  end
end
