// frontend/src/components/HomePage.js
import React from 'react';
import JobListings from './JobListings';
import UserProfile from './UserProfile';
import AuthForms from './AuthForms';
import JobCreationForm from './JobCreationForm';

function HomePage() {
    return (
        <div>
            <section>
                <h2>Welcome to our Job Application Platform</h2>
                <p>Explore job listings, create your profile, and apply for jobs.</p>
            </section>

            <section>
                <h3>Job Listings</h3>
                <JobListings />
            </section>

            <section>
                <h3>User Profile</h3>
                <UserProfile />
                {/* Assuming UserProfile component accepts user prop */}
            </section>

            <section>
                <h3>Authentication</h3>
                <AuthForms />
            </section>

            <section>
                <h3>Create Job Listing</h3>
                <JobCreationForm />
            </section>
        </div>
    );
}

export default HomePage;
