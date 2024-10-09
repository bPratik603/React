import ClickCounter from "./ClickCounter"


const WithName = (oldComponent)=>{
    return function EnhancedComponent(props){
        return <ClickCounter {...props} name="HOC with old Component"/>
    }
}

export default WithName;