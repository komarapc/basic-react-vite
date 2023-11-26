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
      <Counter count={counter} />
      <button onClick={onClick}>click me</button>
    </>
  );
};

const Counter = ({ count }: { count: number }) => {
  return (
    <>
      <p>You clicked {count} times</p>
    </>
  );
};
