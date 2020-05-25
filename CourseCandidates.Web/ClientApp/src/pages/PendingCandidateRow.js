import React from 'react'
import { Link } from 'react-router-dom'

function PendingCandidateRow(props) {
    const {name,cell,email,id} = props.candidate

    return (
        <tr>
            <td><Link to={`/viewcandidate/${id}`}>view details</Link></td>
            <td>{name}</td>
            <td>{cell}</td>
            <td>{email}</td>
        </tr>
    )
}

export default PendingCandidateRow