import React from "react";
import Welcome from "./components/Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Codetrain" />;
      </div>
    );
  }
}

export default App;
