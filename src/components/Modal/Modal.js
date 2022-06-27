import React, { useState } from "react";
import "./Modal.scss"
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../store/EployeeSlice";


const Modal = () => {

  const dispatch = useDispatch();

  const employee = useSelector((state) => state.employee);
  let [isValidName, setValidName] = useState(false)
  let [isValidEmail, setValidEmail] = useState(false)
  let [isValidNumber, setValidNumber] = useState(false)



  let [userInfo, setUserInfo] = useState({
    id: '',
    name: "",
    email: "",
    number: "",
    department: "",
  });

  const addHandler = () => {
    dispatch(
      addEmployee({obj: userInfo})
    )
  }

  const nameHandler = (e) =>{
    e === '' ? setValidName(true) : setValidName(false)
    setUserInfo({...userInfo, id: employee.length+1, name: e})
  }

  const emailHandler = (e) =>{
    !e.includes('@') ? setValidEmail(true) : setValidEmail(false)
    setUserInfo({...userInfo, email: e})
  }

  const numberHandler = (e) =>{
    e.length < 10 ? setValidNumber(true) : setValidNumber(false)
    setUserInfo({...userInfo, number: e})
  }
 
  const onSubmitHandle = (e) =>{
   e.preventDefault()
   e.target.reset()
  }


  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="smth d-lg-flex w-100 align-items-center justify-content-between">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Employee Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="modal-body">
              <form  onSubmit={onSubmitHandle} className="inner-modal-form d-flex">
                <div className="hero__modal-box col-6">
                  <div className="hero__modal-input-box">
                    <input
                      type="text"
                      className="hero__modal-input input-name"
                      name="full name"
                      placeholder="Full Name"
                      required
                      onChange={(e) => nameHandler(e.target.value)}/>
                       <p style={{display: isValidName ? 'block' : 'none'}}  className="m-0 error-text p-0 mb-2">
                      Name is required
                     </p>
                  </div>
                  <div className="hero__modal-input-box">
                    <input
                      type="email"
                      className="hero__modal-input input-email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={(e) => emailHandler(e.target.value)}/>
                     <p style={{display: isValidEmail ? 'block' : 'none'}} className="m-0 name-warning error-text p-0 mb-2">
                        Use @
                      </p>
                  </div>
                  <div className="hero__modal-input-box">
                    <input
                      type="tel"
                      className="hero__modal-input input-phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      onChange={(e) => numberHandler(e.target.value) }/>
                    
                    <p style={{display: isValidNumber ? 'block' : 'none'}} className="m-0 name-warning error-text p-0 mb-2">
                        More than 10 number
                      </p>
                  </div>
                  <div className="hero__modal-input-box">
                    <input
                      type="text"
                      className="hero__modal-input city-input"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="hero__modal-radio col-6">
                  <div>
                    <p className="gender">Gender</p>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        defaultValue="option3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                       onChange={(e) => setUserInfo({...userInfo, department: e.target.value})}
                      className="form-control input-department"
                      list="datalistOptions"
                      id="exampleDataList"
                      placeholder="Department"
                      required
                    />
                    <datalist id="datalistOptions">
                      <option value="None"></option>
                      <option value="Development"></option>
                      <option value="Marketing"></option>
                      <option value="Accounting"></option>
                      <option value="HR"></option>
                    </datalist>
                  </div>
                  <div className="date-class">
                    <input type="date" defaultValue="2017-06-01" />
                  </div>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Permanent Employee
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                         onClick={addHandler}
                      type="submit"
                      className="modal-submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                    <button type="submit" className="modal-reset-btn" disabled>
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
