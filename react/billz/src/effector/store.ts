import {createEffect, createEvent, createStore} from "effector";

export interface Todo {
    id: number;
    text: string;
    done: boolean
}
const updateTodo = (todos: Todo[], id: number, text: string): Todo[] => todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
}))

const toggleTodo = (todos: Todo[], id: number): Todo[] => todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
}))

const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Number(new Date().getMilliseconds()),
        text,
        done: false
    }
]

export const getTodos = createEffect(async (url: string) => {
    const req = await fetch(url);
    return req.json();
});

export const setNewTodo = createEvent<string>();
export const add = createEvent()
export const toggle = createEvent<number>()
export const deleteHandler = createEvent<number>()
export const update = createEvent<{ id: number, text: string }>()

type StoreType = {
    todos: Todo[],
    newTodo: string,
    isLoading: boolean,
    error: string
}
export default createStore<StoreType>({
    todos: [],
    newTodo: "",
    isLoading: false,
    error: ""
})
    .on(getTodos.pending, (state) => ({...state, isLoading: true}))
    .on(getTodos.doneData, (state, todos: Todo[]) => ({...state, todos, isLoading: false}))
    .on(getTodos.fail, (state) => ({...state, isLoading: false, error: "Failed"}))
    .on(setNewTodo, (state, newTodo) => ({
        ...state,
        newTodo
    }))
    .on(add, (state => ({
        ...state,
        newTodo: "",
        todos: addTodo(state.todos, state.newTodo)
    })))
    .on(toggle, ((state, id) => ({
        ...state,
        todos: toggleTodo(state.todos, id)
    })))
    .on(deleteHandler, ((state, id) => ({
        ...state,
        todos: removeTodo(state.todos, id)
    })))
    .on(update, ((state, {id, text}) => ({
        ...state,
        todos: updateTodo(state.todos, id, text)
    })))