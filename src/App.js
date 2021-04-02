import logo from './logo.svg';
import './App.css';

// state lecture
// counter show when it works and when not
// show how to update state in fn and class
// lists?


function App() {
    // const counter = 0;
    let counter = 0;

    const clickHandler = () => {
        counter++
        console.log(counter);

        return 123;
    }

    return (
        <div className="App">
            <h2>
                {counter}
            </h2>
            <button onClick={clickHandler}>inc</button>
        </div>
    );
}

export default App;
