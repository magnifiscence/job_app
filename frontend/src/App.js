// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobListings from './components/JobListings';
import UserProfile from './components/UserProfile';
import AuthForms from './components/AuthForms';
import JobCreationForm from './components/JobCreationForm';
import Applications from './components/Applications';
import HomePage from './components/HomePage';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={JobListings} />
                <Route path="/user-profile" component={UserProfile} />
                <Route path="/auth" component={AuthForms} />
                <Route path="/create-job" component={JobCreationForm} />
                <Route path="/applications" component={Applications} />
                <HomePage />
                {/* Add more routes for other components */}
            </Switch>
        </Router>
    );
}

export default App;
