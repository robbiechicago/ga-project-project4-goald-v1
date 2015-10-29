class GoalsController < ApplicationController

  before_filter :set_headers 

  def index

    render json: @goals
  end

  def show
    @goal = Goal.find(params[:id])

    render json: @goal
  end

  def options
    set_headers
    # this will send an empty request to the client with 200 status code (OK, can proceed)
    render :text => '', :content_type => 'text/plain'
  end

  private

    def set_goal
      @goal = Goal.find(params[:id])
    end

    def goal_params
      params.require(:goal).permit(:goal_name)
    end

    def set_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Expose-Headers'] = 'Etag'
      headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD'
      headers['Access-Control-Allow-Headers'] = '*, x-requested-with, Content-Type, If-Modified-Since, If-None-Match'
      headers['Access-Control-Max-Age'] = '86400'
    end


end
