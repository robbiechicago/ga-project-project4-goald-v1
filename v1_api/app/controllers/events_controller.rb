class EventsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @events = Event.where(:user_id => @user.id)
    # binding.pry
    @goals = []
    @events.each do |event|
      goal = Goal.find(event.goal_id)
      @goals << goal
    end
    
    render json: @goals
  end

end
