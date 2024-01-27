import {useLocalStorage} from "../../hooks/useLocalStorage.ts";
import {useState} from "react";

const LocalStoragePage = () => {
    const {setItem, getItem, removeItem} = useLocalStorage("input-value")

    useLocalStorage("input-value").setItem({"id": 1})

    const [value, setValue] = useState<string>("")
    const [localstorage, setLocalstorage] = useState<string>(getItem())

    return (
        <div className="LocalStoragePage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input value={value} onChange={e => setValue(e.target.value)} className="form-control mb-3"
                               type="text"/>
                        <button onClick={() => setItem((value))} className="btn mx-2">SET</button>
                        <button onClick={() => {
                            getItem();
                            setLocalstorage(getItem)
                        }} className="btn mx-2">GET
                        </button>
                        <button onClick={removeItem} className="btn mx-2">REMOVE</button>
                        <h5>{localstorage}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

// npm i react-hook-form zustand @hookform/resolvers zod
export default LocalStoragePage;