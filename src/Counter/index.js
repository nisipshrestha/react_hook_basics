import { useEffect, useState, memo } from 'react';

/*
    WARNING: DON'T USE THIS FEATURE UNLESS, ABSOLUTELY NECESSARY.
    THIS DEMONSTRATION IS ONLY FOR EDUCATIONAL PURPOSE.
*/
function arePropsEqual(prevProps, nextProps) {
  /*
    IF TRUE IS RETURNED - NO RE-RENDER OCCURS AS IT ASSUMES prevPRops AND nextProps to be same.
    IF FALSE IS RETURNED - RE-RENDER OCCURS AS IT ASSUMES prevPRops AND nextProps to be different.
  */
  return prevProps.counter === nextProps.counter;
}

/* 
Button Component.
*/

const Button = memo(({ children, counter, data }) => {
  useEffect(() => {
    // console.log("button mounted.");
    return () => {
      // console.log("button unmounted");
    }
  }, []);

  return (
    <div>
      {data.name}
      <p>counter in button: {counter}</p>
      <button>{children}</button>
    </div>
  );
},
  /*  Memo's 2nd parameter: 
      callback Fn with [old/previous prop value, next/current prop value].
      HERE, FN reference for arePropsEqual is passed as 2nd argument for memo. 
    */
  arePropsEqual);

function Counter() {
  const [counter, setcounter] = useState(0);
  const [even, setEven] = useState(0);
  const [data, setdata] = useState({});

  // API fetching FN.
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const value = await response.json();
    setdata(value);
  }

  useEffect(() => {
    // getData() is called during MOUNT and on every counter change.
    getData();

    if (counter % 2 === 0) {
      setEven(counter);
      /*  
        localStorage stores data as KEY, VALUE pair.
        Only string values can be stored in localStorage.
      */
      localStorage.setItem('counterKey', `counter: ${counter}`);
    }
    return () => {
      localStorage.clear();
      // console.log(counter, "return block.");
    }
  }, [counter]);

  useEffect(() => {
    console.log(data);
  }, [data.userId]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setcounter(counter + 1)}>+</button>
          <button onClick={() => setcounter(counter - 1)}>-</button>
        </div>
        {/* <p>LocalStorage value: {localStorage.getItem('counterKey')}</p> */}
        <p>Even: {even}</p>
        {/*
            Conditional Rendering.
            Children element
            Props.
            Object as props.
        */}
        {counter % 2 === 0 && (
          <Button data={{ name: 'test' }} counter={counter}>
            <p>Button child: {even}</p>
          </Button>
        )}
        <p>Counter: {counter}</p>
      </header>
    </div>
  );
}

export default Counter;
