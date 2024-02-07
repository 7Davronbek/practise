import React from "react";
import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import List from "@editorjs/list";

const EditorPage = () => {
  const save = () => {
    const editor = new EditorJS();

    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <div className="EditorPage py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 onClick={save}>Editor Page</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
