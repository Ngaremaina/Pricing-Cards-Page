import { useState } from "react"
import { pro } from "../data"

export default function Pro({toggle}){
    // set toggle menu to open and close dropdown
    const [menuOpen, setMenuOpen] = useState(false)

    // display the features of the pricing plan
    const displayPro = pro.features.map((item)=>{
        return <li className="mx-6"><span className="text-gray-400">{item}</span></li>
    })

    // display the features in the dropdown as a list
    const displayMenu = pro.features.map((item)=>{
        return <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</li>
    })
 
    // set function that toggles menu to true or false
    function handleMenu(){
        setMenuOpen(!menuOpen)
    }


    return(
        // card template
         <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 card hover:scale-110 duration-700 cursor-pointer">

            {/* card title */}
         <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">{pro.title}</h5>
         {/* card price */}
         <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
             <span className="text-3xl font-semibold">$</span>
             <span className="text-5xl font-extrabold tracking-tight">{toggle ? 99 * 12 : 99 * 1}</span>
             <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">{`/${toggle ? "year" : "month"}`}</span>
         </div>
         
         {/* dropdown menu */}
        <div className="dropdown relative inline-block mt-5">
            <button type="button" className="text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:bg-gray-700 text-lg  p-3 inline-flex justify-center w-full text-center border-2 border-gray-700" onClick={handleMenu}>2500 MAUs <svg className="w-2.5 h-2.5 ms-3 mt-3 ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                </svg></button>

            <p className="text-red-700 mt-1 text-sm">Monthly active users</p>
    
        <div className="inline-flex justify-center w-full">

        {/* dropdown menu button */}
        <div id="dropdown" className={`${menuOpen ? "" : "hidden"}  bg-white divide-y divide-gray-100 rounded-lg shadow text-center w-44 dark:bg-gray-700 max-w-full`}>

            {/* dropdown menu list */}
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {displayMenu}
            </ul>
        </div>


        </div>
        </div>

        <div>
            {/* features list */}
            <ul className="max-w-md text-red-700 list-disc list-inside dark:text-red-700 space-y-3 my-7">
                    {displayPro}             
            </ul>

            {/* choose plan button */}
            <button type="button" className="text-white bg-red-700 border-red-700 hover:bg-red-400 focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mb-3 border-2">Choose plan</button>
        </div>

        
         </div>

    )
}