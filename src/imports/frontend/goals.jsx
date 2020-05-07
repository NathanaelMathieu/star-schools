import React, { Component } from 'react'

export class Goals extends Component {
  render() {
    return (
        <div id="goals" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Goals</h2>
            <p>STARSchools is committed to state-based changes in education policy. Primarily through state legislatures, STARSchools will work to promote our ideas across the country.</p>
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
