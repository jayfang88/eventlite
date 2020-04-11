import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import TicketPurchaseContainer from '../tickets/ticket_purchase_container';
import EventDelete from '../events/event_delete';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    let id;
    switch (modal.modal) {
        case 'purchase':
            component = <TicketPurchaseContainer eventId={modal.eventId}/>;
            id = '';
            break;
        case 'delete':
            component = <EventDelete eventId={modal.eventId}/>;
            id = 'delete-modal';
            break;
        default:
            return null;
    }

    return(
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' id={id} onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
};

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);