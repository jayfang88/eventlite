import React from 'react';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/event_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class EventDelete extends React.Component {
    handleDelete() {
        this.props.deleteEvent(this.props.eventId);
        this.props.closeModal();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='event-delete-modal'>
                <div className='delete-modal-head'>
                    <p className='delete-modal-title'>
                        Are you sure you want to delete your event?
                    </p>
                </div>
                <div className='delete-modal-buttons'>
                    <button className='delete-modal-button' id='confirm-delete'
                            onClick={() => this.handleDelete()}>
                        Delete
                    </button>
                    <button className='delete-modal-button' id='cancel-delete'
                            onClick={() => this.props.closeModal()}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
};

const mSTP = state => ({
    eventId: state.ui.modal.eventId
});

const mDTP = dispatch => ({
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP)(EventDelete));