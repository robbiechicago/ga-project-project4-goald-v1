class User < ActiveRecord::Base
  has_many :goals, through: :event
end
