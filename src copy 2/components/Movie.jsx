import React from 'react'
export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routeParams: props.match.params
        }
    }
    render() {
        console.log(this)
        return <div>
            <h2>Movie组件</h2>
            {/* <h3>{this.props.match.params.type}</h3>
            <h3>{this.props.match.params.id}</h3> */}
            <h3>{this.state.routeParams.type}</h3>
            <h3>{this.state.routeParams.id}</h3>
        </div>
    }
}