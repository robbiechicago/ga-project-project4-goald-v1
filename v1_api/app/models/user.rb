class User < ActiveRecord::Base
  has_many :projects
  has_many :goals, through: :projects
  has_many :events, through: :projects
end
