import {useUnit} from "effector-react";

import $store, {deleteHandler, Todo, toggle, update} from "./store.ts"

const TodoCard = () => {
    const store = useUnit($store);
    return (
        <div className="TodoCard">
            <div className="container">
                <div className="row">
                    {store.isLoading && "loading"}
                    {store.error && store.error}
                    {store.todos.length > 0 && store.todos?.map((todo: Todo) => (
                        <div key={todo.id} className="col-lg-4 mb-4">
                            <h5>{todo.id}</h5>
                            <input onChange={e => update({id: todo.id, text: e.target.value})} value={todo.text}
                                   type="text"/>
                            <input onChange={() => toggle(todo.id)} checked={todo.done} type="checkbox"/>
                            <button onClick={() => deleteHandler(todo.id)}>remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoCard;