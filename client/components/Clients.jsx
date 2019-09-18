import React from 'react'

class Clients extends React.Component{
    render(){
        return(
        <React.Fragment>
            <form>
                <h3>Client Details</h3>
                
                <label>First Name</label>
                <input type='text' name='firstName' /*value={firstName}*/ />

                <label>Last Name</label>
                <input type='text' name='lastName' /*value={lastName}*/ />

                <label>Address</label>
                <input type='text' name='address' /*value={address}*/ />

                <label>Brief Description of situation</label>
                <textarea  name="situation" rows="10" cols="50" /*value={situation}*/ ></textarea>

                <h3>Services provided</h3>

                <label>Date</label>
                <input type="date" name="service_date" /*value={service_date}*/ />

                <label>Type of Service</label>
                <select>
                <option value=''>...Select</option>
                    <option value='fuelvoucher'>Fuel Voucher</option>
                    <option value='foodvoucher'>Food Voucher</option>
                    <option value='clothing'>Clothing</option>
                    <option value='option'>Option</option>
                </select>

                <label>Costs incurred</label>
                $<input type="number" min="0.01" step="0.01" max="500" name="cost" /*value={cost}*/ />

                <p>Please note: if costs incurred exceed the limit of $200 please consult Conference Leadership before continuing</p>

                <label>Time spent</label>
                <input type="number" name="datetime-local" /*value={time}*/ /> Hours (estimated to the hour)

                <label>Brief description of services provided</label>
                <textarea  name="service_desc" rows="10" cols="50"  /*value={service_desc}*/></textarea>

                <input type='submit' value="SAVE" />
            </form>
        </React.Fragment>
        )
    }
}

export default Clients