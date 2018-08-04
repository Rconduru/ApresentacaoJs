import React, { Component } from 'react'
import './mobileController.scss'
import 'fontAwesome'
import { w3cwebsocket as WebSocketClient} from 'websocket'

export default class MobileController extends Component {

  constructor(props){
    super(props)

    const client = new WebSocketClient('ws://192.168.1.133:1337');

    client.onopen = function() {
      console.log('WebSocket Client Connected');
    }

    this.state = {
      client: client
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  nextSlide(){
    this.state.client.send('next')
  }

  previousSlide(){
    this.state.client.send('previous')
  }

  render(){
    return (
      <div className="mobile-controller">
        <div className="touch-space"></div>
        <div className="button-space">
          <button type="button" onClick={this.previousSlide} className="previous-navigation"><i className="fa fa-angle-left"></i></button>
          <button type="button" onClick={this.nextSlide} className="next-navigation"><i className="fa fa-angle-right"></i></button>
        </div>
      </div>
    )
  }
}
