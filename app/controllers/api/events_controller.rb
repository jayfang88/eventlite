class Api::EventsController < ApplicationController
    def index
        @events = Event.all
    end

    def show
        @event = Event.find_by(id: params[:id])
    end

    def create
        @event = Event.new(event_params)

        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find_by(id: params[:event][:id])

        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find_by(id: params[:id])
        @event.destroy
        render :show
    end

    private
    def event_params
        params.require(:event).permit(:title, :location, :startdate, :starttime, :enddate, :endtime, :description, :organizer_id, :category, :ticket_type, :photo)
    end
end
