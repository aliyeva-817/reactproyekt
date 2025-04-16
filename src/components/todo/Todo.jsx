import React, { useState } from 'react';
import styles from './Todo.module.css'

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedValue, setSelectedValue] = useState('1');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const addTodo = () => {
    console.log(text);
    const todo = {
      text: text,
      count: selectedValue
    };
    setTodos((Todos) => [...Todos, todo]);
    setText('');
  };

  const deleteTodos = (index) => {
    setTodos((Todos) => Todos.filter((_, i) => i !== index));
  };

  const clearList = () => {
    setTodos([]);
  };

  const sortList = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      const numA = parseInt(a.count, 10); 
      const numB = parseInt(b.count, 10); 
      return numA - numB; 
    });
    setTodos(sortedTodos);
  };
  

  const sortlisted =() => {
    const sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text))
    setTodos(sortedTodos);
    
  }

  return (
    <div>
      <div>
        <label htmlFor='numberSelect'> </label>
        <select name="" id="numberSelect" value={selectedValue} onChange={handleChange}>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <p>
          {selectedValue}
        </p>
      </div>
      <input className={styles.inp}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Item..."
      />
     
      
      <button className={styles.btn} onClick={clearList}>Clear List</button>

      <ul className={styles.qutu}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.count}{todo.text}
            <button className={styles.sil} onClick={() => deleteTodos(index)}>Sil</button>
          </li>
        ))}
      </ul>
       <button className={styles.btn} onClick={addTodo}>ADD</button>
      <button className={styles.btn} onClick={sortList}>sort List</button>
      <button className={styles.btn} onClick={sortlisted}>sort Listed</button>

    </div>
  );
}

export default Todo;

