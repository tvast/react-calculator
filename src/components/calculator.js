import React, { Component } from "react"

class Caclculator extends Component {

    render() {
        return (
            <div className={`column-${this.props.cols}`}>
                <button className="calc" onClick={() => this.props.actions(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}


export default Caclculator
