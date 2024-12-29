import './Card.css'
import { useState } from 'react';
import logo from '.././test.jpg'; 

function Card({ id, name, info, price, image, removeTour }) {
    const [readable, setReadable] = useState(false);
    
    const description = readable ? info : (`${info.substr(0, 200)}....`);

    function readmoreHandler() {
        setReadable(!readable);
    }
    return (
        <div className='border-orange-400 border m-2 p-3 w-[18rem] min-h-min text-justify'>
            <div >
                {/* <img src={image||'./test.jpg'} alt="nothing is there" />
                 */}
                <img src={logo} alt='tour'></img>
            </div>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className='tour-price'>{price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more border rounded-sm text-red-600' onClick={readmoreHandler} >
                        {readable ? 'show less' : 'Readmore'}
                    </span>
                </div>
            </div>
            <div>
                <button onClick={() => removeTour(id)} className='bg-orange-400 p-2 border rounded-md mt-3'>
                    Not Instreated
                </button>
            </div>
        </div>
    );
}

export default Card;
