import Header from "./Components/Header"
function App() {
  let subscribers = [
    {
      id: 1,
      name: "Ravikiran",
      mobile: 7900000056
    },
    {
      id: 2,
      name: "Vamshi.Burra",
      mobile: 2079832154
    }
  ]
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
            subscribers.map(function(subs) {
            return <div key={subs.id} className="grid-container">
              <span className="grid-item">{subs.name}</span>
              <span className="grid-item">{subs.mobile}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn remove-btn">DELETE</button>
              </span>
            </div>
          })
          }
          
        </div>
    </div>
  );
}

export default App;
