import WithComponents from "./WithComponents";
import WithName from "./WithName";


const ClickCounter = (props) => {
    const {count,incrementCount,name} = props;

    return(
        <div>
            <h2>Count is: {count}</h2>
            <button onClick={incrementCount}>Click Me</button>
            <h3>name is: {name}</h3>
        </div>
    )
}

export default WithName( WithComponents(ClickCounter,10));