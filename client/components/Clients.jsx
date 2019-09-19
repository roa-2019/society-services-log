import React from 'react'

import {
    getClients,
    addClient,
} from '../api'

class Clients extends React.Component {
    state = {
        client: {
            firstName: '',
            lastName: '',
            address: '',
            situation: '',
            service_date: '1991-01-01',
            service_type: '',
            cost: 0.00,
            time_spent: 0,
            service_desc: '',
        }
    }

    // handleSave = (e) => {
    //     const newClient = { ...this.state.client }
    //   addClient(newClient)
    //         .then(client => {
    //             this.setState({
    //                 client
    //             })
    //         })
    // }

    handleChange = (e) => {

        const { name, value } = e.target
        console.log(name, value)
        console.log(this.state)
        this.setState({
            client: { 
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
        console.log(this.state.client.service_type)
        return (
            <React.Fragment>

                {/* <div className="clientList">
                    <ul>
                        {this.state.clients.map(client => (
                            <li key={client.id}>
                                {client.service_date}
                                {client.name}
                            </li>
                        ))}
                    </ul>
                </div> */}

                <form onSubmit={this.handleSave}>
                    <h3>Client Details</h3>

                    <label><h5>First Name</h5></label>
                    <input type='text' name='firstName' onChange={this.handleChange} value={this.state.client.firstName} />
                    <br />
                    <label><h5>Last Name</h5></label>
                    <input type='text' name='lastName' onChange={this.handleChange} value={this.state.client.lastName} />
                    <br />
                    <label><h5>Address</h5></label>
                    <input type='text' name='address' onChange={this.handleChange} value={this.state.client.address} />
                    <br />
                    <label><h5>Brief Description of situation</h5></label>
                    <textarea name="situation" rows="10" cols="50" onChange={this.handleChange} value={this.state.client.situation} ></textarea>
                    <br />
                    <h3>Services provided</h3>

                    <label><h5>Date</h5></label>
                    <input type="date" name="service_date" onChange={this.handleChange} value={this.state.client.service_date} />
                    <br />
                    <label><h5>Type of Service</h5></label>
                    <select onChange={this.handleChange} value={this.state.client.service_type}>
                        <option value=''>...Select</option>
                        <option value='visit'>Visit</option>
                        <option value='fuelvoucher'>Fuel Voucher</option>
                        <option value='foodvoucher'>Food Voucher</option>
                        <option value='clothing'>Clothing</option>
                        <option value='studentgrant'>Student grants</option>
                        <option value='other'>Other</option>
                    </select>
                    <br />
                    <label><h5>Costs incurred</h5></label>
                    $<input type="number" min="0.01" step="0.01" max="500" name="cost" onChange={this.handleChange} value={this.state.client.cost} />
                    <br />
                    <p>Please note: if costs incurred exceed the limit of $200 please consult Conference Leadership before continuing</p>
                    <br />
                    <label><h5>Time spent</h5></label>
                    <input type="number" name="time_spent" onChange={this.handleChange} value={this.state.client.time_spent} /> Hours (estimated to the hour)
<br />
                    <label><h5>Brief description of services provided</h5></label>
                    <textarea name="service_desc" rows="10" cols="50" onChange={this.handleChange} value={this.state.client.service_desc}></textarea>
                    <br />
                    <input type='submit' value="SAVE" />
                </form>
            </React.Fragment>
        )
    }
}

export default Clients