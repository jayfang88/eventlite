import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS'
export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

const receiveTickets = tickets => ({
    type: RECEIVE_TICKETS,
    tickets
})

const receiveTicket = ticket => ({
    type: RECEIVE_TICKET,
    ticket
});

const removeTicket = ticketId => ({
    type: REMOVE_TICKET,
    ticketId
});

export const fetchTickets = () => dispatch => (
    TicketApiUtil.fetchTickets()
        .then(tickets => dispatch(receiveTickets(tickets)))
);

export const createTicket = ticket => dispatch => {
    return (
    TicketApiUtil.createTicket(ticket)
        .then(ticket => dispatch(receiveTicket(ticket)))
    )
};

export const deleteTicket = ticketId => dispatch => (
    TicketApiUtil.deleteTicket(ticketId)
        .then(() => dispatch(removeTicket(ticketId)))
);