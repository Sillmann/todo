import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Todo from './pages/Todo';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Todo />}/>
      </Routes>
    </BrowserRouter>
  );
}

