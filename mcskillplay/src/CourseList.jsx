import React from 'react';

import ninja from './images/ninja.png';
import dog from './images/collie.png';
import art from './images/extrem.png';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    name: 'Ninja Skills for Everyday Humans',
    description: 'Learn balance, movement and agility.',
    hours: '12 hours',
    image: ninja
  },
  {
    id: 2,
    name: 'Border Collie Bounce Academy',
    description: 'Fun training for energetic dogs.',
    hours: '8 hours',
    image: dog
  },
  {
    id: 3,
    name: 'Extreme Colouring In',
    description: 'Creative colour and design activities.',
    hours: '6 hours',
    image: art
  }
];

const CourseList = () => {
  return (
    <div className="container">

      {courses.map(course => (
        <div className="course" key={course.id}>

          {/*  TEXT FIRST */}
          <div className="course-content">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p className="hours">Duration: {course.hours}</p>

<Link to={`/course/${course.id}`}>
  <button>View Details</button>
</Link>
          </div>

          {/*  IMAGE LAST (puts it on the right) */}
          <img src={course.image} alt={course.name} />

        </div>
      ))}

    </div>
  );
};

export default CourseList;