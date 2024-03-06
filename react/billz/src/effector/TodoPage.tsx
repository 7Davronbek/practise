import AddTodo from "./AddTodo.tsx";
import TodoCard from "./TodoCard.tsx";
import {getTodos} from "./store.ts";

const TodoPage = () => {
    return (
        <>
            <button onClick={() => getTodos("https://jsonplaceholder.typicode.com/todo")}>get</button>
            <AddTodo />
            <TodoCard />
        </>
    );
};

export default TodoPage;