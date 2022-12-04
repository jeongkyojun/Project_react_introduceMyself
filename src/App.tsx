import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Test from './test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Test />}>
            {/* 테스트용 라우터 이후에 필요없어지면 main으로 교체예정 */}
          </Route>
          {/* <Route path='/' element={<Main></Main>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
