// src/App.js (or index.js)
import React from 'react';
import BlogList from './components/BlogList';
import Article from './interfaces/articles'; // Змінили

const articles: Article[] = [
  {
    id: 1,
    title: 'Introduction to React',
    content: 'React is a JavaScript library for building user interfaces.',
    createdAt: '2022-01-01',
    author: 'John Doe',
    category: 'Programming',
  },
  {
    id: 2,
    title: 'State and Props in React',
    content: 'Understanding the concepts of state and props in React applications.',
    createdAt: '2022-01-05',
    author: 'Jane Smith',
    category: 'Programming',
  },
  {
    id: 3,
    title: 'Getting Started with Redux',
    content: 'Learn how to manage state with Redux in your React applications.',
    createdAt: '2022-01-10',
    author: 'Alice Johnson',
    category: 'Programming',
  },
  {
    id: 4,
    title: '10 Tips for Effective JavaScript Development',
    content: 'Discover tips and tricks to improve your JavaScript coding skills.',
    createdAt: '2022-01-15',
    author: 'Bob Williams',
    category: 'JavaScript',
  },
  {
    id: 5,
    title: 'React Hooks: A Deep Dive',
    content: 'Explore the usage of React Hooks to manage state and side effects.',
    createdAt: '2022-01-20',
    author: 'Charlie Brown',
    category: 'Programming',
  },
];

function App() {
  return (
      <div className="App">
        <BlogList articles={articles} />
      </div>
  );
}

export default App;
