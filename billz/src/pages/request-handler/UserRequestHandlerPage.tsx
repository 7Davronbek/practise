import {useEffect, useState} from "react";
import {getUsers, User} from "./userService.ts";

export default function UserRequestHandlerPage() {
    const [userResponse, setUserResponse] = useState<User[]>([]);

    useEffect(() => {
        async function fetchData() {
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
        <div className="UserRequestHandlerPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {userResponse.map((item) => (
                            <h5 className="mb-5 shadow p-5 text-center" key={item.id}>{item.name}</h5>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

