import React, { useContext } from "react";
import Dashaside from "./Dashaside";
import Dashtopbar from "./Dashtopbar";
import { Global } from "../App";

const Statsactivity = () => {
  const { state, setState, data, deletefun, editfun, updatefun } =
    useContext(Global);
  return (
    <>
      <div className="row">
        <Dashaside />
        <div className="dash_content_con mb-5 pb-5">
          <Dashtopbar />
          <h1 className="title mx-3 text-center">Your Activities</h1>
          <div className="row">
            {data.map((item, id) => {
              return (
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="card shadow mb-4" key={id}>
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold card-title">
                        <span className="text-primary">NAME : </span>
                        {item.name}
                      </h6>
                      <div class="dropdown card_drop">
                        <a
                          href="#link"
                          class="   "
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <span
                              className="action_card_del action_card dropdown-item"
                              onClick={() => {
                                deletefun(item._id);
                              }}
                            >
                              Delete
                            </span>
                          </li>
                          <li>
                            <span
                              className="action_card_edit action_card dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => editfun(item._id)}
                            >
                              Edit
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      <div className="card_desc card_content">
                        <span>Description : </span>
                        <span>{item.description}</span>
                      </div>
                      <div className="card_Type card_content">
                        <span>Exercise : </span>
                        <span>{item.activity}</span>
                      </div>
                      <div className="card_date card_content">
                        <span>Date : </span>
                        <span>{item.date}</span>
                      </div>
                      <div className="card_duration card_content">
                        <span>Duration : </span>
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          class="modal fade editModal"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body mx-3">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="form34"
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        value={state.name}
                        // onChange={onChangeInput}
                        onChange={
                          (e) =>
                            setState({
                              ...state,
                              name: e.target.value,
                            })
                          // handleInput
                        }
                        type="text"
                        id="form34"
                        className="form-control validate"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="md-form mb-4">
                      <i className="fa-solid fa-calendar-days pr-2"></i>
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="form29"
                      >
                        Activity
                      </label>

                      <select
                        className="form-control validate"
                        required
                        name="activity"
                        value={state.activity}
                        onChange={
                          (e) =>
                            setState({
                              ...state,
                              activity: e.target.value,
                            })
                          // handleInput
                        }
                        id="form29"
                      >
                        <option value="">--Select--</option>
                        <option value="run">Run</option>
                        <option value="bicycleride">Bicycle Ride</option>
                        <option value="swim">Swim</option>
                        <option value="walk">Walk</option>
                        <option value="Hike">hike</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="md-form ">
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="form32"
                      >
                        Duration
                      </label>
                      <input
                        name="duration"
                        value={state.duration}
                        onChange={
                          (e) =>
                            setState({
                              ...state,
                              duration: e.target.value,
                            })
                          // handleInput
                        }
                        type="text"
                        id="form32"
                        className="form-control validate"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="md-form ">
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="form32"
                      >
                        Date
                      </label>
                      <input
                        name="date"
                        value={state.date}
                        onChange={
                          (e) =>
                            setState({
                              ...state,
                              date: e.target.value,
                            })
                          // handleInput
                        }
                        type="date"
                        id="form32"
                        className="form-control validate"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="md-form mb-3">
                      <i className="fa-light fa-circle-info"></i>
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="form8"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={state.description}
                        onChange={
                          (e) =>
                            setState({
                              ...state,
                              description: e.target.value,
                            })
                          // handleInput
                        }
                        type="text"
                        id="form8"
                        className="md-textarea form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={updatefun}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <div
            className="modal fade"
            id="modalContactForm"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h4 className="modal-title w-100 font-weight-bold">
                    Edit Form
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body mx-3">
                  <div className="md-form mb-4">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form34"
                    >
                      Name
                    </label>
                    <input
                      name="name"
                      value={state.name}
                      // onChange={onChangeInput}
                      onChange={
                        (e) =>
                          setState({
                            ...state,
                            name: e.target.value,
                          })
                        // handleInput
                      }
                      type="text"
                      id="form34"
                      className="form-control validate"
                    />
                  </div>
                  <div className="md-form mb-3">
                    <i className="fa-light fa-circle-info"></i>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form8"
                    >
                      Description
                    </label>
                    <textarea
                      name="description	"
                      value={state.description}
                      onChange={
                        (e) =>
                          setState({
                            ...state,
                            description: e.target.value,
                          })
                        // handleInput
                      }
                      type="text"
                      id="form8"
                      className="md-textarea form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="md-form mb-4">
                    <i className="fa-solid fa-calendar-days pr-2"></i>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form29"
                    >
                      Activity
                    </label>

                    <select
                      className="form-control validate"
                      required
                      name="activity"
                      value={state.activity}
                      onChange={
                        (e) =>
                          setState({
                            ...state,
                            activity: e.target.value,
                          })
                        // handleInput
                      }
                      id="form29"
                    >
                      <option value="walking">walking</option>
                      <option value="Running">Running</option>
                      <option value="Bicycling">Bicycling</option>
                      <option value="Hiking">Hiking</option>
                      <option value="Swimming">Swimming</option>
                    </select>
                  </div>
                  <div className="md-form ">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form32"
                    >
                      Duration
                    </label>
                    <input
                      name="duration"
                      value={state.duration}
                      onChange={
                        (e) =>
                          setState({
                            ...state,
                            duration: e.target.value,
                          })
                        // handleInput
                      }
                      type="text"
                      id="form32"
                      className="form-control validate"
                    />
                  </div>
                  <div className="md-form ">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="form32"
                    >
                      Date
                    </label>
                    <input
                      name="activityType"
                      value={state.date}
                      onChange={
                        (e) =>
                          setState({
                            ...state,
                            date: e.target.value,
                          })
                        // handleInput
                      }
                      type="date"
                      id="form32"
                      className="form-control validate"
                    />
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button
                    className="btn btn-outline-warning"
                    onClick={editfun}
                    data-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Statsactivity;
