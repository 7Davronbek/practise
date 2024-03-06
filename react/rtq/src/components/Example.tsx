import {useQuery} from "@tanstack/react-query";

const Example = () => {
    const {isPending, error, data} = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/TanStack/query').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="Example">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <strong>👀 {data.subscribers_count}</strong>{' '}
                        <strong>✨ {data.stargazers_count}</strong>{' '}
                        <strong>🍴 {data.forks_count}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;