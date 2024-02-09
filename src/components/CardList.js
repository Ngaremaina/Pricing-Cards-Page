import Enterprise from './cards/Enterprise'
import Pro from './cards/Pro'
import Starter from './cards/Starter'

export default function CardList({toggle}){
    return(       
        
            <div className = 'flex justify-center'>
                <div className = "lg:grid grid-cols-2 xl:grid-cols-3 gap-2">
                    {/* import all cards from card folder */}
                    <Starter toggle = {toggle}/>
                    <Pro toggle={toggle}/>
                    <Enterprise/>
                </div>
            </div>                    
    )
}