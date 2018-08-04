import React, { Component } from 'react'
import './controller.scss'
import 'fontAwesome'
import { w3cwebsocket as WebSocketClient} from 'websocket'
import websocketAddress from '../../helpers/websocketAddress'

export default class Controller extends Component {
  constructor(props){
    super(props)

    const client = new WebSocketClient(websocketAddress());

    client.onopen = function() {
        console.log('WebSocket Client Connected');
    }
    client.onmessage = (e) => {
      if (typeof e.data === 'string') {

        let command =JSON.parse(e.data).command
        command === 'next' ? this.nextSlide() : this.previousSlide()
      }
    };

    this.state = {
      size: props.size ? props.size : 0,
      atualSlide: 1,
      client: client
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  nextSlide(){
    if(this.state.atualSlide != this.state.size){
      this.setState( prevState => ({ atualSlide: prevState.atualSlide + 1 }) )
      this.props.handleForward()
    }
  }

  previousSlide(){
    if(this.state.atualSlide > 1){
      this.setState( prevState => ({ atualSlide: prevState.atualSlide - 1 }) )
      this.props.handleBackward()
    }
  }

  render(){
    return (
      <div className="controller">
        <button type="button" onClick={this.previousSlide} disabled={this.state.atualSlide == 1} className="previous-navigation"><i className="fa fa-angle-left"></i></button>
        <button type="button" onClick={this.nextSlide} disabled={this.state.atualSlide == this.state.size} className="next-navigation"><i className="fa fa-angle-right"></i></button>
      </div>
    )
  }
}
