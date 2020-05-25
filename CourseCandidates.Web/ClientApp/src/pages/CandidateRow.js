import React from 'react'


function CandidateRow(props) {
    const { name, cell, email, notes } = props.candidate

    return (
        <tr>
            <td>{name}</td>
            <td>{cell}</td>
            <td>{email}</td>
            <td hidden={props.notesToggled}>{notes}</td>
        </tr>
    )
}

export default CandidateRow