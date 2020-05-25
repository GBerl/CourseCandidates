import React from 'react'

function AddCandidateForm(props) {

    const { name, email, cell, notes } = props.candidate
    const {onAddCandidateClick,onNotesChange,onCellChange, onEmailChange, onNameChange}=props
    return (
        <div>
            <div className="col-md-6 col-md-offset-3 well">
                <h2>New Candidate</h2>
                <input type="text" className="form-control" placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onNameChange} />
                <br/>
                <input type="text" className="form-control" placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onEmailChange} />
                <br />
                <input type="text" className="form-control" placeholder="Cell"
                    name="cell"
                    value={cell}
                    onChange={onCellChange} />
                <br />
                <textarea rows='4' cols='70' placeholder="Notes"
                    name="notes"
                    value={notes}
                    onChange={onNotesChange}>
                </textarea>
                <button className="btn btn-success btn-block"
                    onClick={onAddCandidateClick}>Add Candidate</button>
            </div>
        </div>
    )
}
export default AddCandidateForm