import React, { Component } from 'react'
import './slider.scss'
import Controller from '../controller'
import styled from 'styled-components';
import Slide1 from '../slide'

const SliderShow = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const SliderFrame = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  margin: auto;
  white-space: nowrap;
  position: relative;
  transform: translateX(-${props => props.optionSlider ? props.optionSlider : 0}%);
  transition: all 300ms ease-out;
`;

export default class Slider extends Component {

  constructor(props){
    super(props)
    this.state = {sliderTranslate: 0};
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  }

  handleForward() {
    this.setState({sliderTranslate: this.state.sliderTranslate + 100});
  }

  handleBackward() {
    this.setState({sliderTranslate: this.state.sliderTranslate - 100});
  }

  renderChildren(){
    return (
      this.props.children
    )
  }

  render() {
    return (
      <div>
        <SliderShow>
          <SliderFrame optionSlider={this.state.sliderTranslate}>
            {this.renderChildren()}
          </SliderFrame>
        </SliderShow>
        <Controller handleBackward={this.handleBackward} handleForward={this.handleForward} size={this.props.children.length}/>
      </div>
    )
  }

}
