import { useEffect, useState } from "react";

import { MyComponent } from "./components/MyComponents";

// prarent component
export default function App() {
  const [count, setCount] = useState(0);

  /**
   * Effect or Life cycle
   */
  console.log("this is will be render every mount"); // firt mounting
  useEffect(() => {
    sayHello();
    console.log("this is will be render every update"); // only render after updated
  }, [count]);
  // end effect or life cycle

  /**
   * Declare function
   */
  const sayHello = () => {
    console.log("hello");
  };

  /**
   * End declare function
   */

  return (
    <>
      <h1>Hello, world!sss</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* passing data into child component */}
      <MyComponent counter={count} onClick={() => setCount(count + 1)} />
      <button onClick={() => buyMeACoffee()}>Count {count}</button>

      <div style={{ marginTop: "20px" }}>
        <HandleEvent />
      </div>
    </>
  );
}

// handle event

const HandleEvent = () => {
  /**
   * Declare state
   */
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [resultValue, setResultValue] = useState<number>(0);
  const [selectValue, setSelectValue] = useState<number>(0);
  // end declare state

  /**
   * Declare function
   */
  const sayHello = () => {
    alert("hello world");
  };

  const handleChangeSelect = (value: number) => {
    setSelectValue(value);
  };
  // end declare function

  /**
   * Effect or Life cycle
   */
  useEffect(() => {
    // set delay 3s
    setTimeout(() => {
      setResultValue(number1 + number2);
    }, 3000);
  }, [number1, number2]);
  // end effect or life cycle

  const handleChangeNumber1 = (value: number) => {
    setNumber1(value);
    console.log({ number1 });
  };
  return (
    <>
      <button
        onClick={() => {
          console.log("clicked");
          sayHello();
        }}
      >
        Click me
      </button>
      <input
        type="number"
        value={number1}
        placeholder="number 1"
        onChange={(e) => handleChangeNumber1(e.target.valueAsNumber)}
      />
      <input
        type="number"
        value={number2}
        placeholder="number 1"
        onChange={(e) => setNumber2(e.target.valueAsNumber)}
      />
      <input
        type="number"
        value={resultValue}
        placeholder="number 1"
        readOnly
      />
      <select
        name=""
        id=""
        value={selectValue}
        onChange={(e) => handleChangeSelect(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <span>You selected {selectValue}</span>
    </>
  );
};

const buyMeACoffee = () => {
  alert("buy me a coffee");
};
