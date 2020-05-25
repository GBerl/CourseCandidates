import React from 'react'
import axios from 'axios'
import CandidateRow from '../pages/CandidateRow'

class ViewDeclined extends React.Component {
    state = {
        declined: [],
        notesToggled:''
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`api/candidates/getcandidatesbystatus?status=declined`)
        this.setState({ declined: data })
    }

    render() {
        return (
            <div className='container'>
                <h2 style={{ textAlign: "center" }}>Declined</h2>

                <button className='btn btn-primary'
                    onClick={() => this.setState({ notesToggled: !this.state.notesToggled })}>
                Toggle Notes</button>
                    
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cell</th>
                            <th>Email</th>
                            <th hidden={this.state.notesToggled}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.declined.map((candidate) => <CandidateRow key={candidate.id}
                            candidate={candidate} notesToggled={this.state.notesToggled} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ViewDeclined