import { Calculator } from "./components/Calculator";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";

function App() {
  return (
    <>
      <Counter />
      <br />
      <hr />
      <br />
      <Todo />
      <br />
      <hr />
      <br />
      <Calculator/>
    </>
  );
}

export default App;
