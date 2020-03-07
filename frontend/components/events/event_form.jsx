import React from 'react';

class EventForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.event
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTicketChange = this.handleTicketChange.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleTicketChange() {
        // debugger;
        // event.preventDefault();
        this.setState({
            ticketType: event.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // this.props.submitEvent(this.state)
    }

    render() {
        return(
            <div id='event-form-page'>
                <h1>{this.props.formType}</h1>
                <div>1</div>
                <h2>Event Details</h2>
                <form onSubmit={this.handleSubmit} id='event-form'>
                    <label>Event Title
                        <br/>
                        <input type="text" placeholder='Give it a short distinct name' value={this.state.title} onChange={this.update('title')}/>
                    </label>
                    <label>Location
                        <br/>
                        <input type="text" value={this.state.location} onChange={this.update('location')} />
                    </label>
                    
                    <label>Starts
                        <br/>
                        <input value={this.state.startdate} type="date"/>
                        <select value={this.state.starttime} className="time-dropdown">
                            <option value="12:00am">12:00am</option>
                            <option value="12:30am">12:30am</option>
                            <option value="1:00am">1:00am</option>
                            <option value="1:30am">1:30am</option>
                            <option value="2:00am">2:00am</option>
                            <option value="2:00am">2:30am</option>
                            <option value="3:00am">3:00am</option>
                            <option value="3:30am">3:30am</option>
                            <option value="4:00am">4:00am</option>
                            <option value="4:30am">4:30am</option>
                            <option value="5:00am">5:00am</option>
                            <option value="5:30am">5:30am</option>
                            <option value="6:00am">6:00am</option>
                            <option value="6:30am">6:30am</option>
                            <option value="7:00am">7:00am</option>
                            <option value="7:30am">7:30am</option>
                            <option value="8:00am">8:00am</option>
                            <option value="8:30am">8:30am</option>
                            <option value="9:00am">9:00am</option>
                            <option value="9:30am">9:30am</option>
                            <option value="10:00am">10:00am</option>
                            <option value="10:30am">10:30am</option>
                            <option value="11:00am">11:00am</option>
                            <option value="11:30am">11:30am</option>
                            <option value="12:00pm">12:00pm</option>
                            <option value="12:30pm">12:30pm</option>
                            <option value="1:00pm">1:00pm</option>
                            <option value="1:30pm">1:30pm</option>
                            <option value="2:00pm">2:00pm</option>
                            <option value="2:00pm">2:30pm</option>
                            <option value="3:00pm">3:00pm</option>
                            <option value="3:30pm">3:30pm</option>
                            <option value="4:00pm">4:00pm</option>
                            <option value="4:30pm">4:30pm</option>
                            <option value="5:00pm">5:00pm</option>
                            <option value="5:30pm">5:30pm</option>
                            <option value="6:00pm">6:00pm</option>
                            <option value="6:30pm">6:30pm</option>
                            <option value="7:00pm">7:00pm</option>
                            <option value="7:30pm">7:30pm</option>
                            <option value="8:00pm">8:00pm</option>
                            <option value="8:30pm">8:30pm</option>
                            <option value="9:00pm">9:00pm</option>
                            <option value="9:30pm">9:30pm</option>
                            <option value="10:00pm">10:00pm</option>
                            <option value="10:30pm">10:30pm</option>
                            <option value="11:00pm">11:00pm</option>
                            <option value="11:30pm">11:30pm</option>
                        </select>
                    </label>
                    <label>Ends
                        <br/>
                        <input value={this.state.enddate} type="date" />
                        <select value={this.state.endtime} className="time-dropdown">
                            <option value="12:00am">12:00am</option>
                            <option value="12:30am">12:30am</option>
                            <option value="1:00am">1:00am</option>
                            <option value="1:30am">1:30am</option>
                            <option value="2:00am">2:00am</option>
                            <option value="2:00am">2:30am</option>
                            <option value="3:00am">3:00am</option>
                            <option value="3:30am">3:30am</option>
                            <option value="4:00am">4:00am</option>
                            <option value="4:30am">4:30am</option>
                            <option value="5:00am">5:00am</option>
                            <option value="5:30am">5:30am</option>
                            <option value="6:00am">6:00am</option>
                            <option value="6:30am">6:30am</option>
                            <option value="7:00am">7:00am</option>
                            <option value="7:30am">7:30am</option>
                            <option value="8:00am">8:00am</option>
                            <option value="8:30am">8:30am</option>
                            <option value="9:00am">9:00am</option>
                            <option value="9:30am">9:30am</option>
                            <option value="10:00am">10:00am</option>
                            <option value="10:30am">10:30am</option>
                            <option value="11:00am">11:00am</option>
                            <option value="11:30am">11:30am</option>
                            <option value="12:00pm">12:00pm</option>
                            <option value="12:30pm">12:30pm</option>
                            <option value="1:00pm">1:00pm</option>
                            <option value="1:30pm">1:30pm</option>
                            <option value="2:00pm">2:00pm</option>
                            <option value="2:00pm">2:30pm</option>
                            <option value="3:00pm">3:00pm</option>
                            <option value="3:30pm">3:30pm</option>
                            <option value="4:00pm">4:00pm</option>
                            <option value="4:30pm">4:30pm</option>
                            <option value="5:00pm">5:00pm</option>
                            <option value="5:30pm">5:30pm</option>
                            <option value="6:00pm">6:00pm</option>
                            <option value="6:30pm">6:30pm</option>
                            <option value="7:00pm">7:00pm</option>
                            <option value="7:30pm">7:30pm</option>
                            <option value="8:00pm">8:00pm</option>
                            <option value="8:30pm">8:30pm</option>
                            <option value="9:00pm">9:00pm</option>
                            <option value="9:30pm">9:30pm</option>
                            <option value="10:00pm">10:00pm</option>
                            <option value="10:30pm">10:30pm</option>
                            <option value="11:00pm">11:00pm</option>
                            <option value="11:30pm">11:30pm</option>
                        </select>
                    </label>
                    
                    <label>Description
                        <br/>
                        <input type="text" value={this.state.description} onChange={this.update('description')} />
                    </label>

                    <div>2</div>
                    <h2>Create Tickets</h2>
                    <label>What type of ticket would you like to start with?
                        <input type="radio" checked={this.state.ticketType === 'Free'} value='Free' onChange={this.handleTicketChange}/>Free
                        <input type="radio" checked={this.state.ticketType === 'Paid'} value='Paid' onChange={this.handleTicketChange} />Paid
                        {/* <select value={this.state.ticketType} id="ticket-type" onChange={this.update('ticketType')}>
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select> */}
                    </label>

                    <div>3</div>
                    <h2>Additional Settings</h2>
                    <label>Event Topic
                        <select value={this.state.category} id="topic" onChange={this.update('category')}>
                            <option value="Business &amp; Professional">Business &amp; Professional</option>
                            <option value="Community &amp; Culture">Community &amp; Culture</option>
                            <option value="Family &amp; Education">Family &amp; Education</option>
                            <option value="Food &amp; Drink">Food &amp; Drink</option>
                            <option value="Health &amp; Wellness">Health &amp; Wellness</option>
                            <option value="Hobbies &amp; Special Interest">Hobbies &amp; Special Interest</option>
                            <option value="Music">Music</option>
                            <option value="Other">Other</option>
                            <option value="Sports &amp; Fitness">Sports &amp; Fitness</option>
                            <option value="Travel &amp; Outdoor">Travel &amp; Outdoor</option>
                        </select>
                        <br/>
                        <input type="submit" value={this.props.formType}/>
                    </label>
                </form>
            </div>
        )
    }
};

export default EventForm;