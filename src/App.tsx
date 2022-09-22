import React from "react";
import logo from "./logo.svg";
import "./App.css";

type MyNumber = "success" | "error" | "warning";

interface ComponentProps {
  name?: string;
  age?: number;
  title?: string;
  fun: ({}: ComponentProps) => JSX.Element;
}

type MyType = string | number;

type SA = {
  [key: string]: number;
};

const Hello = ({ name, age, title }: ComponentProps): JSX.Element => {
  return <div>Hellow</div>;
};

function App() {
  return (
    <div className="App">
      <div className="box-border h-[200px] bg-lime-400 w-full"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello fun={Hello} />
      </header>
    </div>
  );
}

export default App;
