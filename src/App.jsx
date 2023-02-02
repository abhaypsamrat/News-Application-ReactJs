import React, { Component } from "react";
import Navbar from '../src/components/Navbar'
import News from "./components/News";

export default class App extends Component {
  render() {
    return <div>
      <Navbar />
      <News pageSize={9}/>
    </div>;
  }
}
