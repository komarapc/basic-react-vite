type Props = {
  counter: number;
  onClick?: () => void;
};

// child component
export const MyComponent = (props: Props) => {
  const { counter, onClick } = props;
  return (
    <>
      <div>
        <h1>My Component</h1>
      </div>
      <p>This is my component</p>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>click me</button>
    </>
  );
};
