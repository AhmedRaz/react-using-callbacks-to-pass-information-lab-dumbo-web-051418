import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectColor: null
    }
  }

  setColor = (color) => {
    this.setState((previousState) => {
      return {
        selectColor: color
      }
    })
  }

  passColor = () => (this.state.selectColor)

  genRow = (vals) => (
    vals.map(val => <Cell color={val} passColor={this.passColor} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
