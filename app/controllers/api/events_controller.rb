class Api::EventsController < ApplicationController
    

    private
    def event_params
        params.require(:event).permit(:title, :location, :starts, :ends, :description, :organizer_id, :ticket_type)
    end
end
