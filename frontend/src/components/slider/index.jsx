import React, { Component } from 'react'
import './slider.scss'
import Controller from '../controller'
import styled from 'styled-components';

const SliderShow = styled.div`
  height: 400px;
  width: 1000px;
  margin: auto;
  overflow: hidden;
`;

const SliderFrame = styled.div`
  display: block;
  height: 400px;
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

  render() {
    return (
      <div>
        <SliderShow>
          <SliderFrame optionSlider={this.state.sliderTranslate}>
            <div className="slider1"></div>
            <div className="slider2"></div>
            <div className="slider3"></div>
          </SliderFrame>
        </SliderShow>
        <Controller handleBackward={this.handleBackward} handleForward={this.handleForward} size={3}/>
      </div>
    )
  }

}
