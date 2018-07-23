import React, { Component } from 'react'
import './controller.scss'
import 'fontAwesome'

export default class Controller extends Component {
  constructor(props){
    super(props)
    this.state = {
      size: props.size ? props.size : 0,
      atualSlide: 1
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  nextSlide(){
    this.setState( prevState => ({ atualSlide: prevState.atualSlide + 1 }) )
    this.props.handleForward()
  }

  previousSlide(){
    this.setState( prevState => ({ atualSlide: prevState.atualSlide - 1 }) )
    this.props.handleBackward()
  }

  render(){
    console.log(this.state);
    return (
      <div className="controller">
        <button type="button" onClick={this.previousSlide} disabled={this.state.atualSlide == 1} className="left-navigation"><i className="fa fa-angle-left"></i></button>
        <button type="button" onClick={this.nextSlide} disabled={this.state.atualSlide == this.state.size} className="right-navigation"><i className="fa fa-angle-right"></i></button>
      </div>
    )
  }
}
