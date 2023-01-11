import { Component } from 'react';
import Student from './Student';

export default class Roster extends Component {

render() {

    const studentArray = []

    this.props.students.forEach((kid, idx) => {
        studentArray.push(
            <Student 
                name={kid.name} 
                bio={kid.bio} 
                scores={kid.scores} 
                key={`kid-${idx}`}
                />
        )
    })

    return (
        <>
        {studentArray}
        </>
    )
}

}