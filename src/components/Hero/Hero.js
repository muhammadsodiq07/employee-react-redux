import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { cancelEmployee } from "../../store/EployeeSlice";
import EditModal from "../EditModal/EditModal";

const Hero = () => {
  
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const idEditHandler = (elId) => {
    setId(elId);
  }

  const cancelHandler = (elId) => {
    dispatch(cancelEmployee({ id: elId }));
  };

  const employee = useSelector((state) => state.employee);

  return (
    <div className="hero__right">
      <div className="hero__employee d-flex">
        <div className="hero__employee-icon-box">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx={9} cy="8.5" r="1.5" opacity=".3" />
            <path
              d="M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"
              opacity=".3"
            />
            <path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
          </svg>
        </div>
        <div className="hero__employee-box">
          <h2 className="hero__employee-title">New Employee</h2>
          <p className="hero__employee-text">Form design with validation</p>
        </div>
      </div>
      <div className="hero__info">
        <div className="hero__searc-box d-flex align-items-center justify-content-between position-relative">
          <div className="hero__search-part position-relative">
            <form className="hero__search-part-input d-flex align-items-center">
              <label htmlFor="search-input" className="search-label">
                Search Employees
              </label>
              <i className="bx bx-search-alt-2" />
              <input
                className="hero__searh-input-real"
                type="text"
                name="search"
                id="search-input"
              />
            </form>
          </div>
          <div className="hero__btn-holder">
            <button
              className="hero__btn d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="bx bx-plus" />
              add new
            </button>
          </div>
        </div>
        <div className="hero__table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  Employee Name
                  <button className="head-btn">
                    <i className="bx bx-up-arrow-alt arrow-btn" />
                  </button>
                </th>
                <th scope="col">
                  Email Address(Personal)
                  <button className="head-btn">
                    <i className="bx bx-up-arrow-alt arrow-btn" />
                  </button>
                </th>
                <th scope="col">
                  Mobile number
                  <button className="head-btn">
                    <i className="bx bx-up-arrow-alt arrow-btn" />
                  </button>
                </th>
                <th scope="col">
                  Department
                  <button className="head-btn">
                    <i className="bx bx-up-arrow-alt arrow-btn" />
                  </button>
                </th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="hero__tbody">
              {employee.map((item) => {
                return (
                  <>
                    <tr key={`m` + item}>
                      <td class="td-name">{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.number}</td>
                      <td>{item.department}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="hero__pen"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropEdit"
                            onClick={() => idEditHandler(item.id)}
                          >
                            <i className="bx bx-pencil" />
                          </button>
                          <button
                            className="hero__close"
                          >
                            <i 
                            onClick={() => cancelHandler(item.id)}
                            className="bx bx-x" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal />
      <EditModal id={id}
      setId={setId}
      />
    </div>
  );
};

export default Hero;
