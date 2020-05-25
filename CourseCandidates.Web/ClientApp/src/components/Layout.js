import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ValueContext } from '../ValueContextComponent'

export class Layout extends Component {

    render() {
        return (

            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>

                        <div className="navbar-collapse collapse">
                            <ValueContext.Consumer>
                                {value => {
                                    return (
                                        <ul className="nav navbar-nav">
                                            <li><Link to={`/addcandidate`}>Add Candidate</Link></li>
                                            <li><Link to={`/viewpending`}>Pending({value.candidateCounts.pending})</Link></li>
                                            <li><Link to={`/viewconfirmed`}>Confirmed({value.candidateCounts.confirmed})</Link></li>
                                            <li><Link to={`/viewdeclined`}>Declined({value.candidateCounts.declined})</Link></li>
                                        </ul>
                                    )
                                }}
                            </ValueContext.Consumer>
                        </div>
                    </div>
                </nav>
                <div className="container" style={{ marginTop: 55 }}>
                    {this.props.children}
                </div>

            </div>


        )
    }
}
