import {enterprise} from "../data"

export default function Enterprise(){
    const displayEnterprise = enterprise.features.map((item)=>{
        return <li className="mx-6"><span className="text-gray-400">{item}</span></li>
    })

    return(
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 card hover:scale-110 duration-700 cursor-pointer">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">{enterprise.title}</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span className="text-5xl font-extrabold tracking-tight">{enterprise.description}</span>
        </div>
        <div className="mt-32">
            <ul className="max-w-md text-red-700 list-disc list-inside dark:text-red-700 space-y-3 my-7">
                {displayEnterprise}             
            </ul>
            <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center hover:bg-red-700 border-red-500 mt-9 border-2">Contact Us</button>

        </div>
       
        </div>
    )
}