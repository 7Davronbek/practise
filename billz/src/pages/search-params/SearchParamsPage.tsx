import {useSearchParams} from "react-router-dom";
import {ChangeEvent, useState} from "react";


const SearchParamsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState<string>("")
    const [limit, setLimit] = useState<string>("")

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const params = `?page=${page}&limit=${limit}`

        setSearchParams(params);

        console.log(searchParams.get("page"))
        console.log(searchParams.get("limit"))
    }

    const handleClear = () => {
        setSearchParams("")
    }

    return (
        <div className="SearchParamsPage">
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit} className="col-12">
                        <input value={page} onChange={(e: ChangeEvent<HTMLInputElement>) => setPage(e.target.value)}
                               className="form-control mb-3"
                               type="text"/>
                        <input value={limit} onChange={(e: ChangeEvent<HTMLInputElement>) => setLimit(e.target.value)}
                               className="form-control mb-3"
                               type="text"/>

                        <button type={"submit"} className="btn">Search</button>
                    </form>
                    <button onClick={handleClear} className="btn">Clear</button>
                </div>
            </div>
        </div>
    );
};

export default SearchParamsPage;