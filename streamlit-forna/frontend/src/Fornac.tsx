import React from "react";
import { withStreamlitConnection, StreamlitComponentBase } from 'streamlit-component-lib';

import * as test from "./fornac.js";

console.log(test)
console.log(test.FornaContainer)
// debugger
// (window as any).test = test
// console.log(test)
// const test = require("fornac")
// console.log(test)
interface IState {

}

class STFornac extends StreamlitComponentBase<IState> {
  state = {
    args: this.props.args,
  }

  // componentDidMount() {
  //   // const FornaContainer = require("fornac");
  //   console.log(fornac)
  //   var container = new fornac.FornaContainer(`#${this.props.args.key}`, {'animation': true, 'zoomable': false, 'initialSize':[500,300]});

  //   var options = {
  //     'structure': '..((((...))))...((...((...((..&............))...))...))..',
  //     'sequence': 'ACGAUCAGAGAUCAGAGCAUACGACAGCAG&ACGAAAAAAAGAGCAUACGACAGCAG'
  //   };
  //   container.addRNA(options.structure, options);
  // }
  

  public render(): React.ReactNode {
    // console.log(fornac)
    return (
      <div>
        <h1>test1111</h1>
      </div>
      // <div id={this.props.args.key}></div>
      
    )
  }
}

export default withStreamlitConnection(STFornac);
