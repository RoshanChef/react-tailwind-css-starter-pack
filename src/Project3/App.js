import './App.css'
import { useEffect, useState } from 'react';

function App() {
    const [text, setText] = useState('');
    const [width, setWidth] = useState(window.innerWidth);
    function change_handler(event) {
        setText(event.target.value);
        console.log(text);
    }

    // //variant 1 -> Every Render
    // useEffect(() => {
    //     console.log('UI Rendering happened ... ');
    // })

    // //variant 2  -> First Render 
    // useEffect(() => {
    //     console.log('UI Rendering is happened overhere ... ');
    // }, []) 

    // // variant 3 -> whenever dependency is changed 
    useEffect(() => {
        console.log('changes are done ... ');
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    }, [window.onresize]);

    // variant 4 
    // useEffect(() => {
    //     //second ..
    //     console.log('listner is added ...'); //second this
    //     //first ..
    //     return (() => { //first this
    //         console.log('listner removed ... ');
    //     })
    // }, [text]);


    window.addEventListener('resize',()=>{
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    })

    function resizeHandler() {
        setWidth(Window.innerWidth);
    }
    return (
        <div className='flex justify-center h-8 mt-10' onChange={resizeHandler}>
            <h2>Hello Rohan {width}</h2>
            <input className='bg-blue-500 p-2 text-white' type="text" onChange={change_handler} />
        </div>
    )
}

export default App;    