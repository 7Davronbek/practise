import {useUnit} from "effector-react";

import $store, {setNewTodo, add} from "./store.ts"

const AddTodo = () => {
    const store = useUnit($store)
    return (
        <div className="AddTodo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input value={store.newTodo} onChange={e => setNewTodo(e.target.value)} type="text"/>
                        <button type={"button"} onClick={() => add()}>Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;