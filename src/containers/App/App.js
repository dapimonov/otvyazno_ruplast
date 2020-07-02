import React from 'react';
import './App.scss';
import Header from "../../components/Header/Header";
import MainScreen from "../../components/MainScreen/MainScreen";
import FormScreen from "../../components/FormScreen/FormScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <FormScreen />
    </div>
  );
}

export default App;
