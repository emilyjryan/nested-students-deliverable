import { Component } from 'react';
import Score from './Score'

export default class Student extends Component {
    
    render () {
        console.log(this.props)

        return (
            <>
            <h1>{this.props.name}</h1>
            <p>{this.props.bio}</p>

            <Score scores={this.props.scores}/>
            </>
        )


    }

}