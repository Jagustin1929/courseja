import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CourseList from './CourseList';
import CourseDetail from './CourseDetail';  //  note capital C

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        
        <h1>MicroCourses (SkillPlay)</h1>

        <p>
          Welcome to SkillPlay, a fun and lively group of courses within the MicroCourses platform — 
          where learning doesn’t feel like learning. Explore our unique courses designed to build real skills 
          in creative and unexpected ways. Browse below and find something a little different!
        </p>

        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;