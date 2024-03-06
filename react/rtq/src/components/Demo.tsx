import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addTodo, fetchTodos, todoApi} from "../api";
import {useState} from "react";
const Demo = () => {
    const query = useQueryClient();

    const [todo, setTodo] = useState("")


    const {data, isLoading, error} = useQuery({
        queryFn: () => fetchTodos(),
        queryKey: ["todos"],
    })

    const {mutateAsync: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            query.invalidateQueries(["todos"]);
        },
    });

    const handleSubmit = async () => {
        try {
            await addTodoMutation({title: todo})
            setTodo("")
        } catch (err) {
            console.log(err)
        }
    }

    if (isLoading) return "Loading...";
    if (error) return "Error"
    return (
        <div className="Demo mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input value={todo} onChange={e => setTodo(e.target.value)} type="text"
                               className="form-control mb-3"/>
                        <button disabled={isLoading} onClick={handleSubmit} className="btn btn-danger mb-5">Save
                        </button>
                    </div>
                    {data && data.map((item) => (
                        <div key={item.id} className="col-lg-6 d-flex gap-5 mb-3">
                            <h5>{item.title}</h5>
                            <input readOnly type="checkbox" checked={item.completed} name="" id=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Demo;