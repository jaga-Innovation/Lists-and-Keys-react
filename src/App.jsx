// // Default using lists
// import React from 'react';
// import './App.css';

// function App() {
//   const Courses = [
//     { id: 1, name: 'Angular Courses' },
//     { id: 2, name: 'React Courses' },
//     { id: 3, name: 'AWS Courses' },
//     { id: 4, name: 'Redux Courses' },
//     { id: 5, name: 'NodeJS Courses' },
//     { id: 6, name: 'Express Courses' },
//     { id: 7, name: 'MEAN Courses' },
//     { id: 8, name: 'MERN Courses' }
//   ];

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React JS List and Keys</h1>

//         <ul>
//           {Courses.map((data) => (
//             <li>{data.name}</li>
//           ))}
//         </ul>

//         <ul>
//           {Courses.map((data) => (
//             <li key={data.id}>{data.name}</li>
//           ))}
//         </ul>

//         <ul>
//           {Courses.map((data, index) => (
//             <li key={index}>{data.name}</li>
//           ))}
//         </ul>

//       </header>
//     </div>
//   );
// }

// export default App;

const Developers = {
  name: "raju",
  skills: [
    { name: "Angular", type: "Frontend" },
    { name: "ExpressJS", type: "Backend" },
  ],

  name: "bhai",
  skills: [
    { name: "React", type: "Frontend" },
    { name: "NodeJS", type: "Backend" },
  ],

  name: "jackie",
  skills: [
    { name: "VueJS", type: "Frontend" },
    { name: "PHP", type: "Backend" },
  ],

  name: "chan",
  skills: [
    { name: "Swift", type: "Frontend" },
    { name: "Python", type: "Backend" },
  ],

}; 

// List Required a Key
// Keys are a way to help React know how to efficiently update a list
