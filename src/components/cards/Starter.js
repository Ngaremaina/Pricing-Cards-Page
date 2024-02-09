import {starter} from "../data"

export default function Starter({toggle}){
    // display features of starter plan
     const displayStarter = starter.features.map((item)=>{
        return <li className="mx-6"><span className="text-gray-400">{item}</span></li>
    })

    
    return(
        // card template
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 card hover:scale-110 duration-700 cursor-pointer">

                {/* card title */}
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">{starter.title}</h5>

            {/* starter plan price  */}
            <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{toggle ? 19 * 12: 19 * 1}</span>
                
            </div>
            <div className="mt-28">
                
           {/* display features */}
            <ul className="max-w-md text-red-700 list-disc list-inside dark:text-red-700 mx-3 space-y-3 my-7">
                   {displayStarter}             
            </ul>
            {/* choose plan button */}
            <button type="button" className="text-white hover:bg-red-700 border-red-500 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center border-2 mt-4">Choose plan</button>

            </div>
           
            
            </div>
    )
}