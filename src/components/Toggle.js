export default function Toggle({handleToggle}){
    return(
        // toggle button template
        <div>
            {/* header text */}
             <p className = "text-center text-white mt-5">Choose a plan</p>
             {/* toggle button */}
            <div className = "flex justify-center p-3 space-x-3 mb-5 text-white">
                    <p className='text-base mt-1'>Billed monthly</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" onClick={handleToggle}>
                        </span>
                    </label>
                    <p className='text-base mt-1'>Billed annually</p>

            </div>  
        </div>
    )
}