class RemoveUserIdGoalIdFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :user_id, :integer
    remove_column :events, :goal_id, :integer
    add_column :events, :project_id, :integer
    add_column :events, :event_datetime, :datetime
  end
end
