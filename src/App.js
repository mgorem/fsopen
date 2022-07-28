import { useState } from "react";

const Header = ({ headerinfo }) => {
  return <h1>{headerinfo}</h1>;
};
const Button = ({ stats }) => {
  return (
    <>
      <button>{stats}</button>
    </>
  );
};

const App = () => {
  const feedback = {
    headerinfo: "give feedback",
    stats: [
      {
        stat1: "good",
      },
      {
        stat2: "neutral",
      },
      {
        stat3: "bad",
      },
    ],
  };
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header feedback={feedback} />
      <Button feedback={feedback} />
      <Button feedback={feedback} />
      <Button feedback={feedback} />
      <Header feedback={feedback} />
    </>
  );
};

export default App;

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   const Header = (props) => {
//     console.log(props);
//     return (
//       <>
//         <h1>{props.name}</h1>
//       </>
//     );
//   };

//   const Content = (props) => {
//     return (
//       <>
//         <p>{props.parts}</p>
//       </>
//     );
//   };

//   const Total = (props) => {
//     return (
//       <>
//         <p>
//           <p>Number of exercises {props.parts}</p>
//         </p>
//       </>
//     );
//   };

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   );
// };

// export default App;
