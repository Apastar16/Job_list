import React from 'react'
import Hero from '../Components/Hero'

import JobListings from '../Components/JobListings';
import ViewAllJobs from '../Components/ViewAllJobs';
import HomeCards from '../Components/HomeCards';
const HomePage = () => {
  return (
    <>
     <Hero/>
     <HomeCards />
     <JobListings isHome={true} />
     <ViewAllJobs />
    </>
  );
};

export default HomePage;
