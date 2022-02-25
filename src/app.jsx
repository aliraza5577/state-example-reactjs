import React, { useState } from 'react';




function App(){
    
    const[count,setCount] = useState(0);
    const addNum = () => {
        setCount(count + 1);
    }
    const subNum = () => {
        setCount(count - 1);
    }


    return(
        <>
            <div className='mainWrapper'>
            <div className='innerWrapper'>
                <div className='bar'>
                    <h1>Hello Sir your Count Is: <span>{count}</span> 😍</h1>
                    <button onClick={addNum}>Add Count</button>
                    <button onClick={subNum}>Minus Count</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default App;