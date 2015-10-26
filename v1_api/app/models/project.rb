class Project < ActiveRecord::Base
  belongs_to :user
  belongs_to :goal
  has_many :events
end
