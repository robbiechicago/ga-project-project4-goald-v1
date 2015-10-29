class Goal < ActiveRecord::Base
  has_many :projects
  has_many :users, through: :projects
  # has_many :events, through: :project
end
