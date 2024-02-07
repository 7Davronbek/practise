import React from 'react'
import axios from 'axios'

const Cambridge = () => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0dWRlbnQtYXBpLmNhbWJyaWRnZW9ubGluZS51ei92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNjY3OTk0MDcwLCJleHAiOjE2Njc5OTc2NzAsIm5iZiI6MTY2Nzk5NDA3MCwianRpIjoieGRNSHR4bGR6QnVDdWZmRiIsInN1YiI6IjczNzA4IiwicHJ2IjoiMjFmMThjZjQ1NDEwMzI5NTQ1YTYzNDA5YTIyZTQ4MGU2NjRiNzllZiJ9.s221uCv9myRr8OvFGP6r95khSZajJuyM11NWJcbey5c",
            'Host': 'api.producthunt.com'

        }
    }
    const post = async () => {
        await axios.post('https://student-api.cambridgeonline.uz/v1/student/homework', {
            result: 15,
            task_id: 137,
            type: "video"
        }, config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='Cambridge' >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button onClick={post}>Send</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cambridge