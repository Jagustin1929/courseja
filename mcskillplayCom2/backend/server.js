const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// your course data
const courses = [
  {
    id: 1,
    title: 'Ninja Skills for Everyday Humans',
    description: 'Learn balance, movement and agility.',
    duration: '12 hours',
    instructor: 'Alex Park',
    category: 'Fitness',
    image: 'ninja.png'
  },
  {
    id: 2,
    title: 'Border Collie Bounce Academy',
    description: 'Fun training for energetic dogs.',
    duration: '8 hours',
    instructor: 'Jamie Lee',
    category: 'Animal Training',
    image: 'collie.png'
  },
  {
    id: 3,
    title: 'Extreme Colouring In',
    description: 'Creative colour and design activities.',
    duration: '6 hours',
    instructor: 'Taylor Kim',
    category: 'Art',
    image: 'extrem.png'
  }
];

// test route
app.get('/', (req, res) => {
  res.send('Server is working');
});

// GET all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

//  GET one course by ID (THIS MUST BE ABOVE app.listen)
app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  res.json(course);
});

// POST create new course
app.post('/courses',
  [
    body('title').isString().withMessage('Title must be text'),
    body('description').isString().withMessage('Description must be text'),
    body('instructor').isString().withMessage('Instructor must be text'),
    body('duration').isString().withMessage('Duration must be text'),
    body('category').isString().withMessage('Category must be text')
  ],
  (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newCourse = {
      id: courses.length + 1,
      ...req.body
    };

    courses.push(newCourse);

    res.status(201).json(newCourse);
  }
);



// server always LAST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
