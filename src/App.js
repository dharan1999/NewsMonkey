import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <News />
      </>
    )
  }
}

