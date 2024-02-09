export default function Header(){
    return(
        // header template
        <div className='justify-center flex '>
            <div className='text-white  bg-red-700 rounded-b-lg p-2 lg:w-4/12 xl:w-3/12'>
            <p className='text-center'>Your current plan:</p>
            <p className='text-center font-bold text-lg'>Starter Trial + 500MAUs</p>
            </div>
        </div>
    )
}