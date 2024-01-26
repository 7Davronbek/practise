import {createReactEditorJS} from 'react-editor-js'
import {EDITOR_JS_TOOLS} from '../editor-js/tools.js'

const EditorJsPage = () => {
    const ReactEditorJS = createReactEditorJS()

    return (
        <div className="EditorJsPage">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        EditorJsPage
                        <div className="wrap border shadow">
                            <ReactEditorJS onChange={e => console.log(e)} tools={EDITOR_JS_TOOLS}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorJsPage;