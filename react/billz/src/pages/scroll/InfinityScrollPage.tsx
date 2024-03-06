import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfinityScrollPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    console.log(page)
    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=${page}`);
            const data = await response.json();

            // @ts-ignore
            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            // @ts-ignore
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="InfinityScrollPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <InfiniteScroll
                            dataLength={items.length}
                            next={fetchData}
                            hasMore={true} // Replace with a condition based on your data source
                            loader={<p>Loading...</p>}
                            endMessage={<p>No more data to load.</p>}
                        >
                            <ul>
                                {items.map(item => (
                                    <li key={item.body}>{item.body}</li>
                                ))}
                            </ul>
                        </InfiniteScroll>
                        {error && <p>Error: {error.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfinityScrollPage;