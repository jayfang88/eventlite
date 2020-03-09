export const createTicket = ticket => (
    $.ajax ({
        method: 'POST',
        url: '/api/tickets',
        data: { ticket }
    })
);

export const deleteTicket = ticketId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tickets/${ticketId}`
    })
);