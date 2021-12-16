import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerLocal } from "../../../redux/actions/login.actions";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import style from "./Register.module.scss";
import Imagen from "./1.png";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    fristName: "",
    lastName: "",
    email: "",
    password: "",
    validarPassword: "",
  });

  const validateEmail = (e) => {
    let { name, value } = e.target;
    let expresion =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setValues({
      ...values,
      [name]: value,
    });
    if (!expresion.test(value)) {
      setErrors({
        ...errors,
        [name]: "No es un email valido!",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validatePassword = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
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
    setValues({
      ...values,
      [name]: value,
    });
    if (value !== values.password) {
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
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Se ha enviado un correo, por favor verifique su cuenta")
    dispatch(registerLocal(values));
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div className={style.test}>
        <div className={style.check}>
          <img className={style.image} src={Imagen} alt="" />
        </div>
        <div className={style.contenedor}>
          <form onSubmit={handleSubmit}>
            <p className={style.titleLogin}>REGISTRO</p>
            <div>
              <TextField
                variant="standard"
                type="text"
                name="fristName"
                label="Nombre"
                value={values.fristName}
                onChange={handleChange}
                style={{ width: "250px" }}
              />
            </div>

            <div>
              <TextField
                variant="standard"
                type="text"
                name="lastName"
                label="Apellido"
                value={values.lastName}
                onChange={handleChange}
                style={{ width: "250px" }}
              />
            </div>

            <div>
              <TextField
                variant="standard"
                type="text"
                name="email"
                label={<EmailIcon />}
                value={values.email}
                onChange={(e) => {  
                  handleChange(e)
                  validateEmail(e);
                
                }}
                style={{ width: "250px" }}
              />
              <p>{errors.email}</p>
            </div>

            <div className={style.text}>
              <TextField 
                variant="standard"
                type="password"
                name="password"
                label={<VpnKeyIcon />}
                value={values.password}
                onChange={(e) => {
                  handleChange(e);
                  validatePassword(e);
                }}
                style={{ width: "250px" }}
              />
              <p>{errors.password}</p>
            </div>

            <div className={style.text}>
              <TextField
                variant="standard"
                type="password"
                name="validarPassword"
                label={<VpnKeyIcon />}
                value={values.validarPassword}
                onChange={(e) => {
                  handleChange(e);
                  validatePassword2(e);
                }}
                style={{ width: "250px" }}
              />
              <p>{errors.validarPassword}</p>
            </div>

            <div className={style.button}>
              <Button
                variant="contained"
                size="x-large"
                style={{ backgroundColor: "#000000", width: 200 }}
                type="submit"
              >
                {" "}
                REGISTRARSE
              </Button>
            </div>
          </form>

          <div>
            Ya tenes cuenta? <Link to="/login">Ingresá</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;