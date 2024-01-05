import React from "react";
import CounterWithHooks from "./components/Counter";
import SetTimeWithLegacyRedux from "./components/SetTimeWithLegacyRedux";
import NameHooksOnly from "./components/NameHooksOnly"
import NameRedux from "./components/NameRedux"
import NameLegacyRedux from "./components/NameLegacyRedux";

function App() {
  return (
    <div className="App" style={{ margin: "30px" }}>
      <NameHooksOnly />
      <NameRedux />
      <NameLegacyRedux />
      <CounterWithHooks />
      <SetTimeWithLegacyRedux />
    </div>
  );
}

export default App;
