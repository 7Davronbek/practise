import {useUserStore} from "./useUserStore.ts";
import {useEffect} from "react";

const UserZustandPage = () => {
    const user = useUserStore((state) => state.user)
    const isLoading = useUserStore((state) => state.isLoading)

    const getUsers = useUserStore(state => state.getUsers);

    useEffect(() => {
        getUsers()
    }, [getUsers]);

    return (
        <div className="UserZustandPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="my-3 text-center">zustand</h5>
                        {isLoading && "Loading"}
                        {/*{error && error}*/}
                        {user && user.slice(0, 3).map((item) => (
                            <h5 className="mb-5 shadow p-5 text-center" key={item.id}>{item.name}</h5>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserZustandPage;