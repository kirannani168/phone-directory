import React from "react";
import Header from "./Header";
import '../Styles/AddSubscriber.css'
function AddSubscriber(){
    return(
        <div>
            <Header heading="Add Subscriber"/>
            <div className="component-body-container">
                <button className="custom-btn">Back</button>
                <form className="subscriber-form">
                    <label htmlFor="name" className="label-ontrol">Name: </label><br/>
                    <input id="name" type="text" className="input-control" name="name"></input><br/><br/>

                    <label htmlFor="phone" className="label-ontrol">Phone: </label><br/>
                    <input id="phone" type="tel" className="input-control" name="phone"></input><br/><br/>

                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                        <span className="subscriber-info">Name: </span><br/>
                        <span className="subscriber-info">Phone</span><br/>
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddSubscriber;