import React, {useState} from 'react';
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

function App() {
    // const counter = 0;
    // let counter = 0;
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    //....

    const clickHandler = () => {
        // counter++
        // console.log(counter);

        // setCounter(counter+1);
        const newCounter = counter + 1;
        setCounter(newCounter);
        // console.log(newCounter);
        // console.log(counter);

        // return 123;
    }

    console.log('parent rerender');

    return (
        <div className="App">
            <Header counter={counter}/>
            <h2>
                {counter}
            </h2>
            <button onClick={clickHandler}>inc</button>
        </div>
    );
}

export default App;
