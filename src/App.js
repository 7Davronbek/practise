import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState([]);

  const options = {
    method: "GET",
    url: "https://fit-life-food.p.rapidapi.com/seasons/summer",
    headers: {
      "X-RapidAPI-Host": "fit-life-food.p.rapidapi.com",
      "X-RapidAPI-Key": "c511b01b19msh8c3707b7b51462cp11805ejsn17b32391d509",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        uk-toggle="target: #modal-example"
      >
        Open
      </button>
      <a href="#modal-example" uk-toggle>
        Open
      </a>
      <div id="modal-example" uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title">Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <button className="uk-button uk-button-primary" type="button">
              Save
            </button>
          </p>
        </div>
      </div>
      lorqweqwe
      {state.map((item) => {
        return (
          <>
            <h4>{item.title}</h4>
            <p>{item.created_at}</p>
          </>
        );
      })}
    </>
  );
};

export default App;
