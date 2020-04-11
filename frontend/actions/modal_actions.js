export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE-MODAL';

export const openModal = (modal, eventId) => ({
    type: OPEN_MODAL,
    modal,
    eventId
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});