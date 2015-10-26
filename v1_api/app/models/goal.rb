class Goal < ActiveRecord::Base
  has_many :users, through: :project
  has_many :events, through: :project
end
