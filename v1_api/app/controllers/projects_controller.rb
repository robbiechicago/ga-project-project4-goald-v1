class ProjectsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @projects = Project.where(:user_id => @user.id)
    # binding.pry
    @goals = []
    @projects.each do |project|
      goal = Goal.find(project.goal_id)
      @goals << goal
    end
    
    render json: @goals
  end

end
