import {useEffect, useState} from "react";
import {getUsers} from "./userService.ts";

export default function UserRequestHandlerPage() {
    const [userResponse, setUserResponse] = useState<unknown>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getUsers({limit: 10, page: 1})
                console.log(res)
                setUserResponse(res);
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
                        {userResponse.data.map((item) => (
                            <h5 key={item.id}>{item.name}</h5>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

