/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

function Heading(props) {
  return (
    <>
    <h1 className='heading'>Title as it is: {props.title}</h1>
    <button onClick={ () => console.log('soenlit') }>Click me</button>
    </>
  );
}

export default function App() {
  const ret = <Heading title="1234"/>
  return (
    ret
  );
}
