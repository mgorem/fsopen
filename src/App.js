const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    console.log(props);
    return (
      <>
        <h1>{props.name}</h1>
      </>
    );
  };

  const Content = (props) => {
    return (
      <>
        <p>{props.parts}</p>
      </>
    );
  };

  const Total = (props) => {
    return (
      <>
        <p>
          <p>Number of exercises {props.parts}</p>
        </p>
      </>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
