import React from 'react'
import { getClients, updateClient } from '../api'

class ServiceList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: []
        }
    }
    componentDidMount() {
        getClients ()
        .then(clients => {
            this.setState ({ clients })
        })
    }
    render() {
        console.log(this.state.clients)
        return (
            <React.Fragment>
                <div className="clientList">
                    <ul>
                        {this.state.clients.map(client => (
                            <li key={client.id}>{client.firstName}  {client.lastName}
                               
                                <ul>
                                    <li>Service provided: {client.service_type}</li>
                                    <li> {client.service_date}</li>
                                    
                                </ul>
                                {}
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default ServiceList