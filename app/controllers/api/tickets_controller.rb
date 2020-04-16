class Api::TicketsController < ApplicationController
    def index
        if current_user
            @tickets = current_user.tickets
        else
            @tickets = []
        end
    end

    def create
        @ticket = Ticket.new(ticket_params)

        if @ticket.save
            render json: @ticket
        else
            @ticket = Ticket.new
            render json: ['You already have a ticket'], status: 422
        end
    end

    def destroy
        @ticket = Ticket.find_by(id: params[:id])

        if @ticket
            @ticket.destroy
        end
    end

    private
    def ticket_params
        params.require(:ticket).permit(:user_id, :event_id)
    end
end
