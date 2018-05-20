import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super() 

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(val) {
        this.setState({ number1: parseInt(val, 10) })
    }

    updateNumber2(val) {
        this.setState({ number2: parseInt(val, 10) })
    }

    addNumbers(num1, num2) {
        this.setState({ sum: num1 + num2 })
    }

    render() {
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' onChange={ (event) => this.updateNumber1(event.target.value) } />
                <input className='inputLine' type='number' onChange={ (event) => this.updateNumber2(event.target.value) } />
                <button className='confirmationButton' onClick={ this.addNumbers(this.state.number1, this.state.number2)} >add</button>
                <span className='resultsBox'> sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum