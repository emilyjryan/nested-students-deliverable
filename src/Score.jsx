import { Component } from 'react';

export default class Score extends Component {
    
render() {

    const scores = this.props.scores.map((score, idx) => {
        return (
            <div key={idx}>
                <p>Date: {score.date}</p>
                <p>Score: {score.score}</p>
            </div>
        )
    })
    console.log(this.props)
    return(
        <>
            {scores}
        </>
    )
}

}