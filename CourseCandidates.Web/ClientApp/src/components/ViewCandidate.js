import React from 'react'
import axios from 'axios'
import ViewCandidatePage from '../pages/ViewCandidatePage'

class ViewCandidate extends React.Component {
    state = {
        candidate: {
        }
    }
    componentDidMount = async () => {
        const { data } = await axios.get(`api/candidates/getcandidatebyid?id=${this.props.match.params.id}`)
        this.setState({ candidate: data })
    }

    onConfirmClick = async value => {
        await axios.post(`api/candidates/updatecandidatestatus`, { ...this.state.candidate, status: 'confirmed' })
        value.setCandidateCounts()
        this.props.history.push('/')
    }

    onDeclineClick = async value => {
        await axios.post(`api/candidates/updatecandidatestatus`, { ...this.state.candidate, status: 'declined' })
        value.setCandidateCounts()
        this.props.history.push('/')
    }
    render() {
        return (
            <ViewCandidatePage candidate={this.state.candidate}
                onConfirmClick={this.onConfirmClick}
                onDeclineClick={this.onDeclineClick} />
        )
    }
}
export default ViewCandidate