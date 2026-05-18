import React from 'react';
import { useParams, Link } from 'react-router-dom';

import ninja from './images/ninja.png';
import dog from './images/collie.png';
import art from './images/extrem.png';

const courses = [
  {
    id: 1,
    name: 'Ninja Skills for Everyday Humans',
    detailedDescription: `Ninja Skills for Everyday Humans focuses on improving balance, coordination, and movement confidence through structured, low risk activities. Participants learn how to roll safely, climb and balance efficiently, and navigate obstacles using their own body weight. The course emphasises personal capability rather than competition, helping learners feel more confident in everyday movement and physical problem solving.`,
    hours: '12 hours',
    image: ninja,
    modules: [
      'Introduction to Functional Movement & Safety',
      'Balance, Stability, and Body Control',
      'Agility exercises',
      'Introduction to movement',
      'Balance training',
      'Agility exercises'
    ]
  },
  {
    id: 2,
    name: 'Border Collie Bounce Academy',
    detailedDescription: `Border Collie Bounce Academy focuses on managing extreme energy and intelligence through positive, welfare focused activities. Using balance tools, low impact platforms, and puzzle based challenges, owners learn how to engage their dogs both mentally and physically. The course encourages collaboration between dog and owner while maintaining ethical and safe training practices.`,
    hours: '8 hours',
    image: dog,
    modules: [
      'Understanding Border Collie Behaviour & Energy Levels',
      'Training Safety, Warm Ups, and Controlled Movement',
      'Balance Platforms and Low Impact Jumping',
      'Safe Rolling and Falling Techniques',
       'Basic Climbing and Traversal Skills',
       'Movement Flow and Confidence Buildings'
    ]
  },
  {
    id: 3,
    name: 'Extreme Colouring In',
    detailedDescription: `Extreme Colouring In transforms traditional colouring into an immersive, group based experience. Participants work on large murals and shared artworks using unconventional tools, time challenges, and music prompts. The course removes pressure around artistic skill and instead focuses on creativity, relaxation, and enjoyment.`,
    hours: '6 hours',
    image: art,
    modules: [
      'Creative Play and Letting Go of Perfection',
      'Exploring Tools, Textures, and Colour',
      'Large Scale Collaborative Artwork',
      'Colouring with Music and Movement',
      'Time Based and Prompt Driven Challenges',
      'Reflection and Creative Wellbeing'
    ]
  }
];
const CourseDetail = () => {
  const { id } = useParams();

  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="course-detail">

      <h1>{course.name}</h1>

      <div className="course-detail-card">

        <div className="course-detail-text">
          <h3>Detailed Description</h3>
          <p>{course.detailedDescription}</p>

          <p><strong>Duration:</strong> {course.hours}</p>

          <h3>Modules</h3>
          <ul>
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>

          <div className="button-group">
            <button type="button">Enrol Now</button>

            <Link to="/">
              <button type="button">Back to Courses</button>
            </Link>
          </div>
        </div>

        <img src={course.image} alt={course.name} />

      </div>

    </div>
  );
};

export default CourseDetail;