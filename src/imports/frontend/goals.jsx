import React, { Component } from 'react'

export class Goals extends Component {
  render() {
    return (
        <div id="goals" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
          </div>
          <div className="goal-grid">

          {this.props.data ? this.props.data.map(d => 
              <div className="col-md-12"> <i className={d.icon}></i>
              <div className="goal-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ): 'loading'}
          
           
          
        
            </div>
          </div>
        </div>
    )
  }
}

export default Goals
