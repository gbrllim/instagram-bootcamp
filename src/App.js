//-----------React-----------//
import React from "react";
//-----------Components-----------//
import NavBar from "./components/NavBar";
import Header from "./components/Header";

//-----------Firebase-----------//
//-----------Styling-----------//
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className="flex h-screen items-center justify-center">
          <p className="text-xl">Home</p>
        </div>
        <NavBar />
      </>
    );
  }
}

export default App;
