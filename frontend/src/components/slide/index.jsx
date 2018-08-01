import React, { Component } from 'react'
import styled from 'styled-components';
import imgLoader from '../../helpers/imgloader'

const SlideDiv = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  background-image: url(${props => {
    return imgLoader(props.imgName)
  }});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: inline-block;
`;

export default class Slide extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <SlideDiv imgName={this.props.imgName}/>
    );
  }
}
