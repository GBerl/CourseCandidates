import React from 'react'
import axios from 'axios'
const ValueContext = React.createContext()
   
class ValueContextComponent extends React.Component {
    state = {
        candidateCounts: {
            pending: '',
            confirmed: '',
            refused: ''
        }
    }

    componentDidMount =  () =>{
       this.setCandidateCounts()
    }
    setCandidateCounts = async() =>
    {
        const { data } = await axios.get(`api/candidates/getcandidates`)
        const candidateCounts = {
            pending: data.filter(p => p.status === 'pending').length,
            confirmed: data.filter(p => p.status === 'confirmed').length,
            declined: data.filter(p => p.status === 'declined').length
        }
        this.setState({ candidateCounts })
    }  

    render() {
        const obj = {
            candidateCounts: this.state.candidateCounts,
            setCandidateCounts: this.setCandidateCounts
        }
        return (
            <ValueContext.Provider value={obj}>
                {this.props.children}
            </ValueContext.Provider>
        )
    }
}
export { ValueContext, ValueContextComponent }