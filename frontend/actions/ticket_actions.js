import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS'
export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';

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

const receiveErrors = errors => ({
    type: RECEIVE_TICKET_ERRORS,
    errors
})

export const fetchTickets = () => dispatch => (
    TicketApiUtil.fetchTickets()
        .then(tickets => dispatch(receiveTickets(tickets)))
);

export const createTicket = ticket => dispatch => (
    TicketApiUtil.createTicket(ticket).then(
        ticket => (dispatch(receiveTicket(ticket))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const deleteTicket = ticketId => dispatch => (
    TicketApiUtil.deleteTicket(ticketId)
        .then(() => dispatch(removeTicket(ticketId)))
);