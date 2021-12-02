import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './Styles/FormEdit.module.scss'
import Form from 'react-bootstrap/Form';
import { editDateUser } from '../../../redux/actions/login.actions';

const FormEdit = () => {

const dispatch= useDispatch();
const {user} = useSelector(state => state.login)
const [input, setInput] = useState ({
    fristName: '',
    lastName: ''
})
//console.log('check', input.fristName)
const onChange = (e) =>{
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}



const handleSubmit = (e) => {
    dispatch(editDateUser(input));
   // handleClose();
}

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Nombre</Form.Label>
                        <Form.Control name='fristName' value={input.fristName} onChange={onChange} type="text" placeholder={user?.user.fristName ?user?.user.fristName : '' } />
                    </Form.Group>
                    <Form.Group className={style.InputForm} controlId="formBasicEmail">
                        <Form.Label className={style.text}>Apellido</Form.Label>
                        <Form.Control name='lastName'   onChange={onChange} type="text" placeholder='' />
                    </Form.Group>
                </div>

                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Fecha de nacimiento</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Documento</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Telefono</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                </div>
               

                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Estado/Provincia</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Ciudad</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Codigo Postal</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </div>

                <div className={style.ctnGrid}>
                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Piso</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className={style.InputForm} >
                        <Form.Label className={style.text}>Departamento</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </div>
                <button type='submit'> submit</button>
            </Form>
        </div>
    )
}

export default FormEdit;