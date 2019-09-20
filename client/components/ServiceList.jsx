import React from 'react'
import { getClients, updateClient } from '../api'
import { IfAuthenticated } from './Authenticated'

class ServiceList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: []
        }
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
                <div className="clientList">
                    <h2>Services Provided to Clients</h2>
                    <IfAuthenticated>
                        <div id="list-clients">
                        <ul>
                            {this.state.clients.map(client => (
                                <li  className='w3-card-2' key={client.id}><h3>{client.firstName}  {client.lastName}</h3>

                                    <ul>
                                        <li> <h5>Current Situation</h5
                                        >{client.situation}
                                        </li>
                                        <li><h5>Service provided:</h5>
                                            <p>{client.service_date}</p>
                                            <p>{client.service_type}</p>
                                            <p>{client.service_desc}</p>
                                        </li>
                                    </ul>
                                    {}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </IfAuthenticated>
                </div>
            </React.Fragment>
        )
    }
}

export default ServiceList