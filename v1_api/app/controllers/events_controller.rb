class EventsController < ApplicationController

  def index
    @events = Event.all

    render json: @events
  end

  def show

  end

  def create
    @event = Event.new(project_id: params[:project_id], event_datetime: params[:event_datetime])

    if @event.save
      puts 'saved'
      # render json: @event, status: :created, location: @event
      
    else
      puts 'not saved'
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  

end
