//import both components
import ClickIncrease from "./components/ClickIncrease"; 
import HoverIncrease from "./components/HoverIncrease";

export default function App() {
  return (
    <div className="App">
      {/*Render both of these components to the UI */}
      <ClickIncrease />
      <HoverIncrease />
    </div>
  );
}