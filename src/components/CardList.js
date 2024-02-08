import {useState} from 'react'
import Enterprise from './cards/Enterprise'
import Pro from './cards/Pro'
import Starter from './cards/Starter'

export default function CardList(){
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <div>
           
            <div className='justify-center flex '>
                <div className='text-white  bg-red-700 rounded-b-lg p-2 lg:w-4/12 xl:w-3/12'>
                <p className='text-center'>Your current plan:</p>
                <p className='text-center font-bold text-lg'>Starter Trial + 500MAUs</p>
                </div>

            </div>
            <p className = "text-center text-white mt-5">Choose a plan</p>
            <div className = "flex justify-center p-3 space-x-3 mb-5 text-white">
                    <p className='text-base mt-1'>Billed monthly</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" onClick={handleToggle}>
                        </span>
                    </label>
                    <p className='text-base mt-1'>Billed annually</p>

            </div>  
        
            <div className = 'flex justify-center'>
                <div className = "lg:grid grid-cols-2 xl:grid-cols-3 gap-2">
                    <Starter toggle = {toggle}/>
                    <Pro toggle={toggle}/>
                    <Enterprise/>
                </div>
            </div>    
            
        </div>
                   
    )
}