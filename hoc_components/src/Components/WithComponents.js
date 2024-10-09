import {useState} from 'react'

const WithComponents = (oldComponent,incrementBuy=1)=>{
    return function EnhancedComponent(props){
        const [count,setCount] = useState(0);
        return(
            <oldComponent {...props} count={count} incrementCount={()=>setCount(count+incrementBuy)} name="seven mentor"/>
        )
    }
}

export default WithComponents;