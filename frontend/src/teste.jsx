import React from 'react';
import ReactDom from 'react-dom';

const Button = props => (
  <button type='button' className='btn'>
    {props.children}
  </button>
);

const ButtonDoido = props => (
  <button type='button' className='btn'>
    {props.label}
  </button>
);

ReactDOM.render(
  <React.Fragment>
    <Button>Exemplo1</Button>,
    <ButtonDoido label='Exemplo2'></Button>,
  </React.Fragment>
  document.getElementById('root')
);
