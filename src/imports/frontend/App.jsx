import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Principles from './principles';
import About from './about';
import Goals from './goals';
import Materials from './materials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Principles data={this.state.resumeData.Principles}/>
        <About  data={this.state.resumeData.About}/>
        <Goals  data={this.state.resumeData.Goals}/>
        <Materials />
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
