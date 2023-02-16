import React, { useContext } from "react";
import { Global } from "../App";
import Dashaside from "../Components/Dashaside";
import Dashtopbar from "../Components/Dashtopbar";

const Addactivity = () => {
  const { handleInputs, state, handleSubmit } = useContext(Global);
  return (
    <>
      <div className="row">
        <Dashaside />
        <div className="dash_content_con mb-5 pb-5">
          <Dashtopbar />
          <h1 className="title mx-3 text-center">ADD ACTIVITY</h1>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-7">
              <section className="addAct_form_con">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <form class="row g-3" method="POST" id="acForm">
                        <div className="row form_row">
                          <div class="col-12">
                            <label for="name" class="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              name="name"
                              onChange={handleInputs}
                              value={state.name}
                            />
                          </div>
                        </div>

                        <div className="row form_row">
                          <div class="col-md-12">
                            <label for="description" class="form-label">
                              Description
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="description"
                              name="description"
                              value={state.description}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="row form_row">
                          <div class="col-12">
                            <label for="duration" class="form-label">
                              Type
                            </label>
                            <select
                              name="activity"
                              value={state.activity}
                              onChange={handleInputs}
                              id=""
                              className="form-select"
                            >
                              <option value="">Select Type---</option>
                              <option value="run">Run</option>
                              <option value="bicycleride">Bicycle Ride</option>
                              <option value="swim">Swim</option>
                              <option value="walk">Walk</option>
                              <option value="Hike">hike</option>
                            </select>
                          </div>
                        </div>
                        <div className="row form_row">
                          <div class="col-12">
                            <label for="date" class="form-label">
                              Date
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="date"
                              placeholder="1234 Main St"
                              name="date"
                              value={state.date}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="row form_row">
                          <div class="col-12">
                            <label for="duration" class="form-label">
                              Duration <small>(m)</small>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="duration"
                              placeholder=""
                              name="duration"
                              value={state.duration}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>

                        <div class="col-12">
                          <button
                            to="/stats"
                            type="submit"
                            class="btn  cst_button filled2"
                            onClick={handleSubmit}
                          >
                            Add Activity
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addactivity;
