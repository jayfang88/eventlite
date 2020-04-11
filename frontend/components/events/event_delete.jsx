import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class EventDelete extends React.Component {
    handleDelete() {
        this.props.deleteEvent(this.props.event.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='event-delete-modal'>
                <h1 className='delete-modal-title'>Are you sure you want to delete your event?</h1>
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

const mSTP = (state, ownProps) => {
    debugger;
    return {

    }
};

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EventDelete);