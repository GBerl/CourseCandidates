import React from 'react'
import { ValueContext } from '../ValueContextComponent'

const ViewCandidatePage = (props) => {
    const { name, cell, email, status, notes } = props.candidate
    const { onConfirmClick, onDeclineClick } = props

    return (
        <ValueContext.Consumer>
            {value => {
                return (
                    <div className="col-md-4 col-md-offset-4 well">
                        <p>Name: {name}</p>
                        <p>Cell: {cell}</p>
                        <p>Email: {email}</p>
                        <p>Status: {status}</p>
                        <p>Notes: {notes}</p>
                        <button className='btn btn-success' onClick={()=>onConfirmClick(value)} style={{ marginRight: 10 }}>Confirm</button>
                        <button className='btn btn-danger' onClick={()=>onDeclineClick(value)}>Decline</button>
                    </div>)
            }}
            </ValueContext.Consumer>)
}
export default ViewCandidatePage