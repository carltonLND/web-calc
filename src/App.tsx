import { Display } from "./components/display/display";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Display primaryText="500" secondaryText="10 + 490 ="></Display>
      </div>
    </div>
  );
}

export default App;
