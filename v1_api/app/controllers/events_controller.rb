class EventsController < ApplicationController

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
