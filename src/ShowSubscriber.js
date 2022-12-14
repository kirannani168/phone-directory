import React, {Component} from "react";
import Header from "./Components/Header"

// function deleteHandler(){
  //   alert("Delete button clicked");
  // }
  // function clickHandler(message){
  //   alert(message);
  // }
  // let subscribers = [
  //   {
  //     id: 1,
  //     name: "Ravikiran",
  //     mobile: 7900000056
  //   },
  //   {
  //     id: 2,
  //     name: "Vamshi.Burra",
  //     mobile: 2079832154
  //   }
  // ]
  
class ShowSubscriber extends Component {
  
  render(){
    return (
      <div className="component-container">
        <Header heading="PhoneBook App"/>
        <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>
  
            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>
            </div>
  
            
            {
              this.props.subscribersList.map(function(subs) {
              return <div key={subs.id} className="grid-container">
                <span className="grid-item">{subs.name}</span>
                <span className="grid-item">{subs.mobile}</span>
                <span className="grid-item action-btn-container">
                  {/* <button className="custom-btn remove-btn" onClick={deleteHandler}>DELETE</button> */}
                  <button className="custom-btn remove-btn">DELETE</button>
                </span>
              </div>
            })
            }
            
          </div>
      </div>
    );
  }
}

export default ShowSubscriber;
