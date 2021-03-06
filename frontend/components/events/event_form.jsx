import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Redirect } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTicketChange = this.handleTicketChange.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleTicketChange() {
        this.setState({ticket_type: event.target.value})
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('event[id]', this.state.id)
        formData.append('event[title]', this.state.title)
        formData.append('event[location]', this.state.location)
        formData.append('event[startdate]', this.state.startdate)
        formData.append('event[starttime]', this.state.starttime)
        formData.append('event[enddate]', this.state.enddate)
        formData.append('event[endtime]', this.state.endtime)
        if (this.state.photoFile) {
            formData.append('event[photo]', this.state.photoFile)
        }
        formData.append('event[description]', this.state.description)
        formData.append('event[organizer_id]', this.state.organizer_id)
        formData.append('event[category]', this.state.category)
        formData.append('event[ticket_type]', this.state.ticket_type)

        this.props.submitEvent(formData)
            .then(res => (this.props.history.push(`/e/${res.event.id}`)))
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {`*${error}`}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div id='event-form-page'>
                <h1 id='form-type'>{this.props.formType}</h1>
                {this.renderErrors()}
                <div id='event-form-main'>
                    <div className='event-form-section'>
                        <div className='num-boxes'>1</div>
                        <h2>Event Details</h2>
                    </div>
                    <form onSubmit={this.handleSubmit} id='event-form'>
                        <label className='form-label'>Event Title<span id='red-asterisk'>*</span></label>
                            <input type="text" placeholder='Give it a short distinct name' value={this.state.title} onChange={this.update('title')}/>

                        <label className='form-label'>Location<span id='red-asterisk'>*</span></label>
                            <GooglePlacesAutocomplete
                                autocompletionRequest={{
                                    componentRestrictions: {
                                        country: ['us']
                                    }
                                }}
                                placeholder='Search for a venue or address.'
                                onSelect={({ description }) => (
                                    this.setState({ location: description })
                                )}
                                suggestionsClassNames={{
                                    container: 'suggestion-container',
                                    suggestion: 'suggestion'
                                }}
                                loader={<div className='event-form-loader'>Loading...</div>}
                            />
                        
                        <div id='starts-ends-container'>
                            <div className='form-starts-ends'>
                                <label className='form-label'>Starts<span id='red-asterisk'>*</span></label>
                                <div className='form-time-container'>
                                <input className='form-date' value={this.state.startdate} type="date" onChange={this.update('startdate')}/>
                                <select value={this.state.starttime} className="time-dropdown" onChange={this.update('starttime')}>
                                    <option value="12:00 AM">12:00 am</option>
                                    <option value="12:30 AM">12:30 am</option>
                                    <option value="1:00 AM">1:00 am</option>
                                    <option value="1:30 AM">1:30 am</option>
                                    <option value="2:00 AM">2:00 am</option>
                                    <option value="2:00 AM">2:30 am</option>
                                    <option value="3:00 AM">3:00 am</option>
                                    <option value="3:30 AM">3:30 am</option>
                                    <option value="4:00 AM">4:00 am</option>
                                    <option value="4:30 AM">4:30 am</option>
                                    <option value="5:00 AM">5:00 am</option>
                                    <option value="5:30 AM">5:30 am</option>
                                    <option value="6:00 AM">6:00 am</option>
                                    <option value="6:30 AM">6:30 am</option>
                                    <option value="7:00 AM">7:00 am</option>
                                    <option value="7:30 AM">7:30 am</option>
                                    <option value="8:00 AM">8:00 am</option>
                                    <option value="8:30 AM">8:30 am</option>
                                    <option value="9:00 AM">9:00 am</option>
                                    <option value="9:30 AM">9:30 am</option>
                                    <option value="10:00 AM">10:00 am</option>
                                    <option value="10:30 AM">10:30 am</option>
                                    <option value="11:00 AM">11:00 am</option>
                                    <option value="11:30 AM">11:30 am</option>
                                    <option value="12:00 PM">12:00 pm</option>
                                    <option value="12:30 PM">12:30 pm</option>
                                    <option value="1:00 PM">1:00 pm</option>
                                    <option value="1:30 PM">1:30 pm</option>
                                    <option value="2:00 PM">2:00 pm</option>
                                    <option value="2:00 PM">2:30 pm</option>
                                    <option value="3:00 PM">3:00 pm</option>
                                    <option value="3:30 PM">3:30 pm</option>
                                    <option value="4:00 PM">4:00 pm</option>
                                    <option value="4:30 PM">4:30 pm</option>
                                    <option value="5:00 PM">5:00 pm</option>
                                    <option value="5:30 PM">5:30 pm</option>
                                    <option value="6:00 PM">6:00 pm</option>
                                    <option value="6:30 PM">6:30 pm</option>
                                    <option value="7:00 PM">7:00 pm</option>
                                    <option value="7:30 PM">7:30 pm</option>
                                    <option value="8:00 PM">8:00 pm</option>
                                    <option value="8:30 PM">8:30 pm</option>
                                    <option value="9:00 PM">9:00 pm</option>
                                    <option value="9:30 PM">9:30 pm</option>
                                    <option value="10:00 PM">10:00 pm</option>
                                    <option value="10:30 PM">10:30 pm</option>
                                    <option value="11:00 PM">11:00 pm</option>
                                    <option value="11:30 PM">11:30 pm</option>
                                </select>
                                </div>
                            </div>
                            <div className='form-starts-ends'>
                                <label className='form-label'>Ends<span id='red-asterisk'>*</span></label>
                                <div className='form-time-container'>
                                <input className='form-date' value={this.state.enddate} type="date" onChange={this.update('enddate')}/>
                                <select value={this.state.endtime} className="time-dropdown" onChange={this.update('endtime')}>
                                    <option value="12:00 AM">12:00 am</option>
                                    <option value="12:30 AM">12:30 am</option>
                                    <option value="1:00 AM">1:00 am</option>
                                    <option value="1:30 AM">1:30 am</option>
                                    <option value="2:00 AM">2:00 am</option>
                                    <option value="2:00 AM">2:30 am</option>
                                    <option value="3:00 AM">3:00 am</option>
                                    <option value="3:30 AM">3:30 am</option>
                                    <option value="4:00 AM">4:00 am</option>
                                    <option value="4:30 AM">4:30 am</option>
                                    <option value="5:00 AM">5:00 am</option>
                                    <option value="5:30 AM">5:30 am</option>
                                    <option value="6:00 AM">6:00 am</option>
                                    <option value="6:30 AM">6:30 am</option>
                                    <option value="7:00 AM">7:00 am</option>
                                    <option value="7:30 AM">7:30 am</option>
                                    <option value="8:00 AM">8:00 am</option>
                                    <option value="8:30 AM">8:30 am</option>
                                    <option value="9:00 AM">9:00 am</option>
                                    <option value="9:30 AM">9:30 am</option>
                                    <option value="10:00 AM">10:00 am</option>
                                    <option value="10:30 AM">10:30 am</option>
                                    <option value="11:00 AM">11:00 am</option>
                                    <option value="11:30 AM">11:30 am</option>
                                    <option value="12:00 PM">12:00 pm</option>
                                    <option value="12:30 PM">12:30 pm</option>
                                    <option value="1:00 PM">1:00 pm</option>
                                    <option value="1:30 PM">1:30 pm</option>
                                    <option value="2:00 PM">2:00 pm</option>
                                    <option value="2:00 PM">2:30 pm</option>
                                    <option value="3:00 PM">3:00 pm</option>
                                    <option value="3:30 PM">3:30 pm</option>
                                    <option value="4:00 PM">4:00 pm</option>
                                    <option value="4:30 PM">4:30 pm</option>
                                    <option value="5:00 PM">5:00 pm</option>
                                    <option value="5:30 PM">5:30 pm</option>
                                    <option value="6:00 PM">6:00 pm</option>
                                    <option value="6:30 PM">6:30 pm</option>
                                    <option value="7:00 PM">7:00 pm</option>
                                    <option value="7:30 PM">7:30 pm</option>
                                    <option value="8:00 PM">8:00 pm</option>
                                    <option value="8:30 PM">8:30 pm</option>
                                    <option value="9:00 PM">9:00 pm</option>
                                    <option value="9:30 PM">9:30 pm</option>
                                    <option value="10:00 PM">10:00 pm</option>
                                    <option value="10:30 PM">10:30 pm</option>
                                    <option value="11:00 PM">11:00 pm</option>
                                    <option value="11:30 PM">11:30 pm</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    
                        <label className='form-label'>Event Image<span id='red-asterisk'>*</span></label>
                            <input id='form-choose-pic' type="file" onChange={this.handleFile.bind(this)}/>
                        
                        <label className='form-label'>Event Description<span id='red-asterisk'>*</span></label>
                        <textarea id='form-description' value={this.state.description} onChange={this.update('description')}></textarea>

                        <div className='event-form-section'>
                            <div className='num-boxes'>2</div>
                            <h2>Create Tickets</h2>
                        </div>

                        <label className='form-label' id='ticket-label'>What type of ticket would you like to start with?<span id='red-asterisk'>*</span></label>
                        <div id='form-ticket-type'>
                            <input type="radio" checked={this.state.ticket_type === 'Free'} value='Free' onChange={this.handleTicketChange} /><label>Free Ticket</label>
                            <div id='space-between'></div>
                            <input type="radio" checked={this.state.ticket_type === 'Paid'} value='Paid' onChange={this.handleTicketChange} /><label>Paid Ticket</label>
                        </div>

                        <div className='event-form-section'>
                            <div className='num-boxes'>3</div>
                            <h2>Additional Settings</h2>
                        </div>

                        <label className='form-label'>Event Topic<span id='red-asterisk'>*</span></label>
                            <select value={this.state.category} id="topic" onChange={this.update('category')}>
                                <option value="default">--Choose a category--</option>
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
                        <input id='form-submit' type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }
};

export default EventForm;