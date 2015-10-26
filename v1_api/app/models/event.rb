class Event < ActiveRecord::Base
  belongs_to :user, through: :project
  belongs_to :goal, through: :project
end
