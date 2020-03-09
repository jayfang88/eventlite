import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

const receiveTicket = ticket => ({
    type: RECEIVE_TICKET,
    ticket
});

const removeTicket = ticketId ({
    type: REMOVE_TICKET,
    ticketId
});

export const createTicket = ticket => dispatch => (
    TicketApiUtil.createTicket(ticket)
        .then(ticket => dispatch(receiveTicket(ticket)))
);

export const deleteTicket = ticketId => dispatch => (
    TicketApiUtil.deleteTicket(ticketId)
        .then(() => dispatch(removeTicket(ticketId)))
);