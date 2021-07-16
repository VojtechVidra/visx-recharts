import { Recharts } from "./components/Recharts";
import { Visx } from "./components/Visx";

function App() {
  return (
    <>
      <Visx metric="Team leaders" value={25} title="Keeping the same results" />
      <Recharts
        metric="Team leaders"
        value={25}
        title="Keeping the same results"
      />
    </>
  );
}

export default App;
