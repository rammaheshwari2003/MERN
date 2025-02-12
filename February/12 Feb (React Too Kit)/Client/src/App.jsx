import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice"; // Corrected the import statement
import { useState } from "react";

const App = () => {

    const [val, setVal]=useState("");

    const dispatch = useDispatch();
    const bgColor = useSelector(state => state.MyColor.color);

    return (
        <>
            <center>

                <h1>Background Color Change</h1>
                Enter Color : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
                <button onClick={() => dispatch(changeColor({bgColor:val}))}>Click Here</button> <br /><br />
                {/* <button onClick={() => dispatch(changeColor(val))}>Click Here</button> <br /><br /> */}

                <div style={{ width: "200px", height: "150px", backgroundColor: bgColor }}></div>

            </center>
        </>
    );
}

export default App;

