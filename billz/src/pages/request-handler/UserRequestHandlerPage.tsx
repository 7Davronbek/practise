import {useEffect, useState} from "react";
import {getUsers, User} from "./userService.ts";
import UserZustandPage from "./zustand/UserZustandPage.tsx";

export default function UserRequestHandlerPage() {
    const [userResponse, setUserResponse] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getUsers({limit: 10, page: 1})
                if (res.code !== "error") {
                    setUserResponse(res?.data);
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <div className="UserRequestHandlerPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {userResponse.slice(0, 3).map((item) => (
                                <h5 className="mb-5 shadow p-5 text-center" key={item.id}>{item.name}</h5>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <UserZustandPage/>
        </>
    );
};

