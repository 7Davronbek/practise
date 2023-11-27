import React, { useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";
import axios from "axios";

const ReactHooksPaginator = () => {
  const [currentData, setCurrentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [clevers, setClevers] = useState([]);

  useEffect(() => {
    setCurrentData(clevers.slice(offset, offset + 4));
    window.scrollTo(0, 0);
  }, [offset, clevers]);

  useEffect(() => {
    const getclever = async () => {
      await axios
        .get(`https://backend.manuscript.uz/ky/` + `main/web-scientist/`)
        .then((response) => {
          setClevers(response.data);
        });
    };
    getclever();
  }, []);

  return (
    <div className="ReactHooksPaginator">
      <div className="container">
        <div className="row">
          {currentData &&
            currentData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 mb-4 d-lg-flex d-none justify-content-center"
                >
                  <div className="head_clever_box">
                    <div className="head_clever_top">
                      <div className="head_clever_left">
                        <img
                          src={item.image}
                          alt=""
                          className="head_clever_img w-100"
                        />
                      </div>
                      <div className="head_clever_text">
                        <div>
                          <div className="head_clever_h_box">
                            <div className="head_clever_h">{item.name}</div>
                            <div className="head_clever_left_box">
                              <img
                                src="/images/view_icon.png"
                                alt=""
                                className="head_clever_left_img"
                              />
                              <div className="head_clever_left_h">
                                {item.views}
                              </div>
                            </div>
                          </div>
                          <div className="head_clever_y">{item.date_birth}</div>
                        </div>

                        <div className="head_clever_p ">
                          {item.biography.slice(0, 90)}...
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => poem(item.id)}
                      className="head_clever_a"
                    >
                      Heade clever
                    </div>
                  </div>
                </div>
              );
            })}
          <Paginator
            totalRecords={clevers.length}
            pageLimit={6}
            pageNeighbours={3}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onClick={() => toTop()}
          />
        </div>
      </div>
    </div>
  );
};

export default ReactHooksPaginator;
