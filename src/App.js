import React, {Component, useState} from 'react';

import './App.css';

// state lecture
// counter show when it works and when not
// show how to update state in fn and class
// lists?

const Header = ({counter}) => {
    console.log('child rerender');
    return (
        <h2>
            {counter}
        </h2>
    )
}

// class App extends Component {
//     state = {
//         counter: 0,
//         isHeaderVisible: true,
//         todos: ['hello', 'react'],
//     };
//
//     clickHandler = () => {
//         this.setState({counter: this.state.counter + 1});
//     }
//
//     toggleHeader = () => {
//         this.setState({isHeaderVisible: !this.state.isHeaderVisible});
//     }
//
//     changeSmthInTodo = () => {
//         const newArr = [...this.state.todos];
//         newArr[0] = Math.random();
//
//         this.setState({todos: newArr});
//     }
//
//
//     render() {
//         const {isHeaderVisible, counter, todos} = this.state;
//         return (
//             <div className="App">
//                 {isHeaderVisible && <Header counter={counter}/>}
//                 <h2>
//                     {this.state.counter}
//                 </h2>
//                 <button onClick={this.clickHandler}>inc</button>
//                 <button onClick={this.toggleHeader}>toggle header</button>
//                 <button onClick={this.changeSmthInTodo}>change smth in todo</button>
//
//                 <div>{todos[0]}</div>
//                 <div>{todos[1]}</div>
//             </div>
//         );
//     }
// }

function App() {
    // const counter = 0;
    // let counter = 0;
    // const [counter, setCounter] = useState(0);
    // const [counter2, setCounter2] = useState(0);
    // const [counter3, setCounter3] = useState(0);
    //....

    // const [counter, setCounter] = useState(0);
    // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    // const [todos, setTodos] = useState(['hello', 'react']);

    const [state, setState] = useState({
        counter: 0,
        isHeaderVisible: true,
        todos: ['hello', 'wold'],
    })

    // const clickHandler = () => {
    //     // counter++
    //     // console.log(counter);
    //
    //     // setCounter(counter+1);
    //     const newCounter = counter + 1;
    //     setCounter(newCounter);
    //     // console.log(newCounter);
    //     // console.log(counter);
    //
    //     // return 123;
    // }

    const clickHandler = () => {
        setState({
            ...state,
            counter: setState.counter + 1
        })

    }

    console.log('parent rerender');

    const toggleHeader = () => {
        setIsHeaderVisible(!isHeaderVisible);
    }

    const changeSmthInTodo = () => {
        const newArr = [...todos];
        newArr[0] = Math.random();
        setTodos(newArr);
    }

    return (
        <div className="App">
            {isHeaderVisible && <Header counter={counter}/>}
            <h2>
                {counter}
            </h2>
            <button onClick={clickHandler}>inc</button>
            <button onClick={toggleHeader}>toggle header</button>
            <button onClick={changeSmthInTodo}>change smth in todo</button>

            <div>{todos[0]}</div>
            <div>{todos[1]}</div>
        </div>
    );
}

export default App;
