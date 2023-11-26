import { useEffect, useState } from "react";

// import { MyComponent } from "./components/MyComponents";

// prarent component
export default function App() {
  console.log("alwyas printed");
  const [count, setCount] = useState(0);
  useEffect(() => {
    sayHello();
  }, [count]);

  const sayHello = () => {
    console.log("hello");
  };
  return (
    <>
      <h1>Hello, world!sss</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <MyComponent counter={count} onClick={() => setCount(count + 1)} /> */}
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
}
