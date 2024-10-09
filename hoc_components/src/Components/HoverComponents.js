import WithComponents from "./WithComponents";

const HoverComponents = (props)=>{
    const {count,incrementCount} = props;

    return(
        <div>
            <h2>Hover count value is : {count}</h2>

            <button onMouseOver={incrementCount}>Hover a button</button>
        </div>
    )
}

export default WithComponents(HoverComponents,5);