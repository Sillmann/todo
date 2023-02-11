import React, { useState } from 'react';
import './styles.css';
import Post from '../Post';

export default function Todo() {

const [value,setValue] = useState('');

const [linhas,setLinhas] = useState([]);

function handleNewTodo(e) {
  e.preventDefault();

  const newTodo = e.target.NovoTodo.value;

  setLinhas([...linhas, newTodo ]);
}


return (
  <div className="Todo-container">
    <div className="Todo-header">
      <p>TODO LIST - informe suas atividades</p>
      <div className="Todo-input">
        <form 
          onSubmit={handleNewTodo}
          className="Todo-form">

          <input 
            type="text"
            name="NovoTodo"
            placeholder="Informe a sua atividade"
            value={value}
            onChange={e => setValue(e.target.value)}    
          />

          <button type="submit">
            Confirmar
          </button>

        </form>
      </div>    
      
      <div>
        <ul>
          {
            Object.keys(linhas).map( lin => {
              return (
                  <li>
                    <p className="Todo-listar">
                      {/* {linhas[lin]} */}
                      <Post conteudo={linhas[lin]} />
                    </p>
                  </li>                  
              )
            },[linhas])
          } 

        </ul>
      </div>
      
    </div>
  </div>
 );  
}

