import './Tours.css'
import Card from './Card'

function Tours(props) {
    return (
        <div>
            <div>
                <h2>Plan With Roshan</h2>
            </div>
            <div className='grid grid-rows-2 grid-cols-3 place-items-center'>
                {
                    props.data.map((val) => {
                        //note whenever you run map in the array must pass a key for unique identifier
                        return <Card key={val.id} {...val} removeTour={props.removeTour}>  </Card>; 
                    })
                }
        </div>
        </div >

    )
}

export default Tours; 