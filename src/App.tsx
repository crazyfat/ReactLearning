import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cmp from './components/01ref/index'
import CMP02 from './components/02非受控组件/index'
import Cmp03 from "./components/03声明周期";
import Cmp04 from "./components/04getSnapShot钩子";
import TodoList from "./components/05todolist案例";
import ReactRouter from "./components/06react-router6"
const p = {
    name: 'zhangsan',
    age: 19
}
function App() {
  return (
    <div className="App">
      <ReactRouter />
    </div>
  );
}

export default App;
