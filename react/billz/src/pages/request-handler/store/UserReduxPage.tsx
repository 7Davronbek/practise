import {useAppDispatch, useAppSelector} from "../../../store/store.ts";
import {useEffect} from "react";
import {userAction} from "./userSlice.ts";

const UserReduxPage = () => {
    const dispatch = useAppDispatch()
    const {isLoading, error, user} = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(userAction.getUsersJson())
    }, []);
    return (
        <div className="UserReduxPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {isLoading && "LOADING"}
                        {error && error}
                        {user && user.map((item) => (
                            <h5 key={item.id}>{item.name}</h5>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReduxPage;