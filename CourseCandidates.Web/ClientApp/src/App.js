import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import AddCandidate from './components/AddCandidate';
import ViewPending from './components/ViewPending';
import ViewConfirmed from './components/ViewConfirmed';
import ViewDeclined from './components/ViewDeclined';
import ViewCandidate from './components/ViewCandidate';
import { ValueContextComponent } from './ValueContextComponent';

export default class App extends Component {

    render() {
        return (
            <ValueContextComponent>
                <Layout>
                    <Route path='/addcandidate' component={AddCandidate} />
                    <Route path='/viewpending' component={ViewPending} />
                    <Route path='/viewconfirmed' component={ViewConfirmed} />
                    <Route path='/viewdeclined' component={ViewDeclined} />
                    <Route path='/viewcandidate/:id' component={ViewCandidate} />
                </Layout>
            </ValueContextComponent>
        );
    }
}
