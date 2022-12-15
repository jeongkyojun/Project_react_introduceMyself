import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Main from './page/Main';
import ProjectWeb from './page/ProjectWeb';
import Test from './test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/web" element={<ProjectWeb />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
