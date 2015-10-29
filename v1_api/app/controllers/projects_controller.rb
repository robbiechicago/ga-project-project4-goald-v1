class ProjectsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @projects = Project.where(user: @user)
  
    render json: @projects, include: [:goal, :events]
  end

end
