import "./App.css";


import Inputs from "./components/Inputs/Inputs";
import Checkbox from "./components/CheckBox/Check";

function App() {
  return (
    <div className='wrapper'>
      <Inputs />
      <Checkbox />
      <Checkbox />
      <Inputs />
    </div>
  );
}

export default App;
