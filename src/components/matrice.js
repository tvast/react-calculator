import React, { Component } from "react"
import Caclculator from "./calculator"

class Matrice extends Component {
    constructor(props) {

        super(props);

        this.state = {
            current: '',
            previous: []
        }
    }
    reset() {
        this.setState = ({
            current: '',
            previous: []
        })
    }
    addCurrent = (symbol) => {
        console.log(symbol)

        if (["+", "*", "-", "/"].indexOf(symbol) > -1) {
            let { previous } = this.state
            previous.push(this.state.current + symbol)
            this.setState({ previous: previous, current: '' })
        }



        else {
            var calcul = this.state.current + symbol
            this.setState({
                current: calcul
            })
        }

    }

    calculate = (symbol) => {
        if (["="].indexOf(symbol) > -1) {
            // let { previous } = this.state

            let old = this.state.previous
            let core = eval(String(old[old.length - 1] + this.state.current))
            console.log(core)
            this.setState({ previous: [], current: core })
        }
        else {
            alert("wrong")
        }
    }

    render() {

        const buttons = [
            {
                symbol: "C", cols: 3, actions: this.reset
            },
            {
                symbol: "/", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "7", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "8", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "9", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "*", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "4", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "5", cols: 1, actions: this.addCurrent
            },

            {
                symbol: "6", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "-", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "1", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "2", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "3", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "+", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "0", cols: 2, actions: this.addCurrent
            },
            {
                symbol: ".", cols: 1, actions: this.addCurrent
            },
            {
                symbol: "=", cols: 1, actions: this.calculate
            },

        ]
        return (

            <div>
                <h1>Calculatrice</h1>
                <p>{
                    this.state.previous[this.state.previous.length - 1]
                }
                </p>
                <input value={this.state.current}></input>

                {
                    buttons.map((btn, i) => {
                        return <Caclculator key={i} symbol={btn.symbol} cols={btn.cols} actions={(symbol) => btn.actions(symbol)} />
                    })
                }
            </div>
        )
    }

}

export default Matrice
