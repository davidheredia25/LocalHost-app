import React from 'react'
import style from './Styles/FormEdit.module.scss'
import Form from 'react-bootstrap/Form'

const FormEdit = () => {
    return (
        <div>
            <Form>
                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Nombre</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Apellido</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                </div>

                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Fecha de nacimiento</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Documento</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Telefono</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                </div>
               

                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Estado/Provincia</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>

                    <Form.Group className={style.InputForm} controlId="formBasicPassword">
                        <Form.Label className={style.text}>Ciudad</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} controlId="formBasicPassword">
                        <Form.Label className={style.text}>Codigo Postal</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                </div>

                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Direccion</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} controlId="formBasicPassword">
                        <Form.Label className={style.text}>Piso</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} controlId="formBasicPassword">
                        <Form.Label className={style.text}>Departamento</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                </div>

            </Form>
        </div>
    )
}

export default FormEdit;