import React,{useState} from 'react'

const BoxGenerator = () => {
    const [inputColor, setInputColor] = useState("");
    const [boxWidth, setBoxWidth] = useState(0);
    const [boxHeight, setBoxHeight] = useState(0);
    const [boxStyleList, setBoxStyleList]=useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const setStyle = {
            display: "inline-block",
            margin: "20px",
            background: inputColor,
            width: `${boxWidth}px`,
            height: `${boxHeight}px`,
        }
        setBoxStyleList([...boxStyleList, setStyle]);
        setInputColor("");
        setBoxHeight("");
        setBoxWidth("");
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input
                    onChange = {(e) => setInputColor(e.target.value)}
                    value={inputColor}>
                </input>
                <label>Width: </label>
                <input
                    onChange = {(e) => setBoxWidth(e.target.value)}
                    value={boxWidth}>
                </input>
                <label>Height: </label>                
                <input
                    onChange = {(e) => setBoxHeight(e.target.value)}
                    value={boxHeight}>
                </input>   
                <button type="submit">submit</button>         
            </form>
            
            <div>
                {
                boxStyleList.map((box,index) =>
                    <div key={index}  style={box}></div>
                    )
                }
            </div>


        </div>
    )
}

export default BoxGenerator