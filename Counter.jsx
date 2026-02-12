import { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:5000/api/counter";
function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(API).then((res) => {
      console.log(res)
      setCount(res.data.data.value)
    });
  }, []);

  const increment = async () => {
    const res = await axios.post(`${API}/inc`);
    setCount(res.data.data.value);
  };

  const decrement = async () => {
    const res = await axios.post(`${API}/dec`);
    setCount(res.data.data.value);
  };

  const reset = async () => {
    await axios.post(`${API}/reset`);
    setCount(0);
  };

  return (
    <div className="card text-center shadow">
      <div className="card-body">
        <h3 className="card-title">Counter App</h3>
        <h1 className="my-3">{count}</h1>

        <button className="btn btn-success me-2" onClick={increment}>
          +
        </button>
        <button className="btn btn-danger me-2" onClick={decrement}>
          -
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
