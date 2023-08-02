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
import Cmp11 from "./components/11setState"
import Person from "./components/10多组件数据共享/person";
import Cmp12 from "./components/12HOOKS";
import Cmp13 from "./components/13context"
import Cmp14 from "./components/14pureComponent"
import Cmp15 from "./components/15slot"
import ErrorTest from "./components/16ErrorBoundary/ErrorTest";
import ErrorBoundary from "./components/16ErrorBoundary";
import Cmp18 from "./components/18父调子"
import Function from "./components/18父调子/function";
import Cmp20 from "./components/20redux实践"
const p = {
    name: 'zhangsan',
    age: 19
}
function App() {
  return (
    <div className="App">
        <Cmp20/>
    </div>
  );
}

export default App;
