import "./App.css";

import { Function_Example } from "./components/function_example";
import { EventExample } from "./components/EventExample";

import UseStateSimpleFormHandling from "./components/UseStateSimpleFormHandling";
import MultiInputFileHandling from "./components/MultiInputFileHandling";
import UseRefWithInput from "./components/UseRefWithInput";
import UseRefFormHandling from "./components/UseRefFormHandling";
function App() {
  return (
    <>
      <h1>Welcome to Basic Concepts</h1>

      <Function_Example />

      <EventExample />

      <UseStateSimpleFormHandling />

      <MultiInputFileHandling />

      <UseRefWithInput/>
      <UseRefFormHandling/>
    </>
  );
}

export default App;