import {useCounterStore} from "../../zustand/useCounterStore.ts";

const CounterPage = () => {
    const count = useCounterStore((state) => state.count)
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)

    // console.log(useCounterStore.getState().count)

    const setCount = () => {
        useCounterStore.setState({count: 0})
    }
    return (
        <div className="CounterPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button onClick={decrement} className="btn mx-3">-</button>
                        {count}
                        <button onClick={increment} className="btn mx-3">+</button>
                        <div>
                            <button className="btn btn-danger" onClick={setCount}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;