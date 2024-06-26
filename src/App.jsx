//rafce
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './Screen/HomePage';
import JobsPage from './Screen/JobsPage';
import NotFound from './Screen/NotFound'
import JobPage,{jobLoader} from './Screen/JobPage';
import AddJobPage from './Screen/AddJobPage';
import EditJobPage from './Screen/EditJobPage';

const App=()=>{
  //Add New Job
  const addJob=async(newJob)=>{
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    });
    return;
  
  };
  //Delete Job
  const deleteJob=async(id)=>{
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
    });
    return;
  };
  //Update update
  const updateJob=async(job)=>{
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(job),
    });
    return;
  }
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<MainLayout />}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='/add-job' element={<AddJobPage  addJobSubmit={addJob}/>}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFound />}/>
      </Route>
        )
  );
  return <RouterProvider router={router} />;
};

export default App;
