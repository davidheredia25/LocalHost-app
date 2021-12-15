import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../redux/actions/login.actions";

const RecuperarPassword = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordDos: "",
  });

  const validatePassword = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    if (!/^.{4,12}$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Debe contener entre 4 y 12 caracteres",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validatePassword2 = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    if (value !== input.password) {
      setErrors({
        ...errors,
        [name]: "No coincide",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(input));
    setInput({
      password: "",
      passwordDos: "",
    });
  };

  return (
    <div class="container p-5">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-lg-5 col-lg-5">
          <div class="card">
            <div class="card-header text-center">
              <h2>Formulario de recuperación de contraseña</h2>
            </div>
            <div class="card-body">
              <form action="/user/nodemailer" method="POST">
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    value={input.email}
                    class="form-control"
                    placeholder="Ingrese su email"
                    onChange={handleChange}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    class="form-control"
                    placeholder="Ingrese su contraseña"
                    onChange={(e) => {
                      handleChange(e);
                      validatePassword(e);
                    }}
                  />
                  <p>{errors.password}</p>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="passwordDos"
                    value={input.passwordDos}
                    class="form-control"
                    placeholder="Ingrese otra vez su contraseña"
                    onChange={(e) => {
                      handleChange(e);
                      validatePassword2(e);
                    }}
                  />
                  <p>{errors.passwordDos}</p>
                </div>
                <button
                  class="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  {" "}
                  Enviar{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecuperarPassword;
