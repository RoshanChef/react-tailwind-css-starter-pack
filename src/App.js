import './App.css';
import Tours from './components/Tours';
import data from './data';
import { useState } from 'react';

function App2() {
    const [tours, setTour] = useState(data);

    function removeTour(id) {
        const newTours = tours.filter((data) => {
            return data.id !== id;
        })
        setTour(newTours);
        console.log('remove');
    }
    function refresh() {
        setTour(data);
    }
    if (tours.length === 0) {
        return (
            <div>
                <h3>No Tour left</h3>
                <button onClick={refresh}>
                    Refresh
                </button>
            </div>
        )
    }
    return (
        <div className=''>
            <Tours data={tours} removeTour={removeTour}></Tours>
        </div>)
}

export default App2; 