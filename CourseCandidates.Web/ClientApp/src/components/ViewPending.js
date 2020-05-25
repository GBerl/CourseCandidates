import React from 'react'
import axios from 'axios'
import PendingCandidateRow from '../pages/PendingCandidateRow'

class ViewPending extends React.Component {
    state = {
        pending:[]
    }

    componentDidMount = async() =>{
        const { data }= await axios.get(`api/candidates/getcandidatesbystatus?status=pending`)
        this.setState({ pending:  data })
    }

    render() {
        return (
            <div className='container'>
                <h2 style={{ textAlign: "center" }}>Pending</h2>

                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cell</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pending.map((candidate) => <PendingCandidateRow key={candidate.id} candidate={candidate} />)}
                    </tbody>
                </table>
            </div>
            )
    }
}
export default ViewPending