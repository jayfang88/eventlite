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
                <p className='delete-modal-title'>Are you sure you want to delete your event?</p>
                <div className='delete-modal-buttons'>
                    <button className='confirm-delete'
                            onClick={() => this.handleDelete()}>
                        Delete
                    </button>
                    <button className='cancel-delete'
                            onClick={() => this.props.closeModal()}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
};

const mSTP = state => {
    return {
        eventId: state.ui.modal.eventId
    }
};

const mDTP = dispatch => ({
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP)(EventDelete));