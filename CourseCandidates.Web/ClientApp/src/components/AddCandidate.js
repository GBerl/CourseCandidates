import React from 'react';
import AddCandidateForm from '../pages/AddCandidateForm'
import axios from 'axios'
import { ValueContext } from '../ValueContextComponent'



class AddCandidate extends React.Component {
    state = {
        candidate: {
            name: '',
            email: '',
            cell: '',
            notes: ''
        }
    }

    onTextChange = e => {
        const candidate = this.state.candidate
        candidate[e.target.name] = e.target.value
        this.setState({ candidate })
    }

    onAddCandidateClick = async value => {
        await axios.post(`api/candidates/addcandidate`, { ...this.state.candidate, status: 'pending' })
        value.setCandidateCounts()
        this.props.history.push('/')
    }
    render() {
        return (
            <ValueContext.Consumer>
                {value => {
                    return (
                        <AddCandidateForm candidate={this.state.candidate}
                            onAddCandidateClick={() => this.onAddCandidateClick(value)}
                            onNotesChange={this.onTextChange}
                            onCellChange={this.onTextChange}
                            onEmailChange={this.onTextChange}
                            onNameChange={this.onTextChange} />
                    )
                }}
            </ValueContext.Consumer>

        )
    }
}
export default AddCandidate
