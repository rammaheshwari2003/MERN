import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { changeColor } from "./colorSlice"; // Corrected the import statement

const App = () => {
    const myval = useSelector(state => state.MyCounter.count);
    const dispatch = useDispatch();
    const bgColor = useSelector(state => state.MyColor.color);

    return (
        <>
            <center>
                <h1>My Counter</h1>

                <button onClick={() => { dispatch(increment()) }}>Increment</button>
                <h1>{myval}</h1>
                <button onClick={() => { dispatch(decrement()) }}>Decrement</button>

                <hr />

                <h1>Background Color Change</h1>
                <button onClick={() => dispatch(changeColor())}>Click Here</button> <br /><br />

                <div style={{ width: "200px", height: "150px", backgroundColor: bgColor }}></div>

            </center>
        </>
    );
}

export default App;

