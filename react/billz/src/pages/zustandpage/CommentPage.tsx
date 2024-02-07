import {useCommentStore} from "../../zustand/useCommentStore.ts";
import {useEffect} from "react";

const CommentPage = () => {
    const isLoading = useCommentStore((state) => state.isLoading)
    const error = useCommentStore((state) => state.error)
    const comment = useCommentStore((state) => state.comment)
    const getComments = useCommentStore(state => state.getComments)

    useEffect(() => {
        getComments()
    }, [getComments]);

    return (
        <div className="CommentPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {isLoading && <h5>LOADING...</h5>}
                        {error && error}
                        <div className="row">
                            {comment && comment.map((item) => (
                                <div key={item.id} className="col-lg-4 mb-3 shadow-sm py-5 rounded">
                                    <h2>{item.id}</h2>
                                    <h4>{item.body}</h4>
                                    <a href={item.email}>{item.email}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentPage;