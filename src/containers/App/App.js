import React from 'react';
import './App.scss';
import Header from "../../components/Header/Header";
import MainScreen from "../../components/MainScreen/MainScreen";
import FormScreen from "../../components/FormScreen/FormScreen";
import ProductScreen from "../../components/ProductScreen/ProductScreen";
import AboutScreen from "../../components/AboutScreen/AboutScreen";
import ContactsScreen from "../../components/ContactsScreen/ContactsScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <FormScreen />
      <ProductScreen />
      <AboutScreen />
      <ContactsScreen />
    </div>
  );
}

export default App;
