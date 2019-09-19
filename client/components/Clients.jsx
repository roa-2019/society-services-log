import React from 'react'

import {
    getClients,
    addClient,
} from '../api'

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: {
                firstName: '',
                lastName: '',
                address: '',
                situation: '',
                service_date: '2001-01-01',
                service_type: '',
                cost: 0.00,
                time_spent: 0,
                service_desc: '',
            }
        }
    }

    handleSave = (e) => {
        const newClient = { ...this.state.client }
        addClient(newClient)
            .then(client => {
                this.setState({
                    client
                })
            })
    }

    handleChange = (e) => {

        const { name, value } = e.target

        this.setState({
            client: {
                ...this.state.client,
                [name]: value
            }



        })
    }
    componentDidMount() {
        getClients()
            .then(clients => {
                this.setState({ clients })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className='client-form'>
                    <form onSubmit={this.handleSave}>
                        <h3>Client Details</h3>

                        <label><h5>First Name</h5></label>
                        <input type='text' name='firstName' onChange={this.handleChange} value={this.state.client.firstName} />


                        <label><h5>Last Name</h5></label>
                        <input type='text' name='lastName' onChange={this.handleChange} value={this.state.client.lastName} />


                        <label><h5>Address</h5></label>
                        <input type='text' name='address' onChange={this.handleChange} value={this.state.client.address} />


                        <label><h5>Brief Description of situation</h5></label>
                        <textarea name="situation" rows="10" cols="50" onChange={this.handleChange} value={this.state.client.situation} ></textarea>


                        <h3>Services provided</h3>

                        <label><h5>Date</h5></label>
                        <input type="date" name="service_date" onChange={this.handleChange} value={this.state.client.service_date} />


                        <label><h5>Type of Service</h5></label>
                        <select placeholder="Select type of service"
                            name="service_type"
                            value={this.state.client.service_type}
                            onChange={this.handleChange} >

                            <option value='null'>...Select</option>
                            <option value='cash donation'>Cash Donation</option>
                            <option value='accomodation'>Accomodation</option>
                            <option value='fuel voucher'>Fuel Voucher</option>
                            <option value='food voucher'>Food Voucher</option>
                            <option value='furniture'>Furniture</option>
                            <option value='medical'>Medical</option>
                            <option value='power bill'>Power Bill</option>
                            <option value='christmas presents'>Christmas Presents</option>
                            <option value='clothing'>Clothing</option>
                            <option value='student grant'>Student grants</option>
                            <option value='visit'>Visit</option>
                            <option value='other'>Other</option>
                        </select>

                        <label><h5>Costs incurred</h5></label>
                        $<input type="number" min="0.01" step="0.01" max="500" name="cost" onChange={this.handleChange} value={this.state.client.cost} />
                      

                        <p id='form-note'>Please note: if costs incurred exceed the limit of $200 please consult Conference Leadership before continuing</p>
                        
                        <label><h5>Time spent</h5></label>
                        <input type="number" name="time_spent" onChange={this.handleChange} value={this.state.client.time_spent} /> Hours (estimated to the hour)
<br />
                        <label><h5>Brief description of services provided</h5></label>
                        <textarea name="service_desc" rows="10" cols="50" onChange={this.handleChange} value={this.state.client.service_desc}></textarea>
                       

                        <input type='submit' value="SAVE" />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Clients