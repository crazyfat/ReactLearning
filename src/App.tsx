import React from 'react';
import logo from './logo.svg';
import store from "./redux/store";
import './App.css';
import Cmp from './components/01ref/index'
import CMP02 from './components/02非受控组件/index'
import Cmp03 from "./components/03声明周期";
import Cmp04 from "./components/04getSnapShot钩子";
import TodoList from "./components/05todolist案例";
import ReactRouter from "./components/06react-router6"
import Cmp05 from "./components/07redux"
import Cmp06 from "./components/07redux/redux"
import Cmp08 from "./components/08react-redux/container"
import Cmp09 from "./components/09react-redux优化1"
import Person from "./components/10多组件数据共享/person";
const p = {
    name: 'zhangsan',
    age: 19
}
function App() {
  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
