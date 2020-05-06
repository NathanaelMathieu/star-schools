import React, { Component } from 'react'

export class principles extends Component {
  render() {
    return (
        <div id="principles" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Principles</h2>
          </div>
          <div className="row">
          {this.props.data ? this.props.data.map((d) => 
 <div className="col-xs-6 col-md-3"> <i className={d.icon}></i>
 <h3>{d.title}</h3>
 <p>{d.text}</p>
</div>
          ) : 'Loading...'}
           
          
          </div>
        </div>
      </div>
    )
  }
}

export default principles
