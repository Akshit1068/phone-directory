import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  render() {

    let subscribers = [
      {
        id: 1,
        name: "Akshit Bhatia",
        phone: "9988776655"
      },
      {
        id: 2,
        name: "Raghav Luthra",
        phone: "9944332211"
      },
      {
        id: 3,
        name: "Lakshay Sharma",
        phone: "7867867860"
      }
    ];

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
             </div>
            })
          }
        </div>
        </div>
    );
  }
}

export default App;
