import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Styles/FormEdit.module.scss'
import { editDateUser } from '../../../redux/actions/login.actions';

const FormEdit = ({ handleClose }) => {
    const {user} = useSelector(state => state.login)
    const id= user?.user?.id;
    console.log('id', id)
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        fristName: '',
        lastName: '',
        document: '',
        dateOfBirth: '',
        telephone: '',
        direction: '',
        floor: '',
        departament: '',
        location: '',
        city: '',
        postalCode: ''

    })
    //console.log('check', input.fristName)
    const onChange = (e) => { 

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editDateUser(id, input));
        handleClose();

    }

    const onClose = () => {
        handleClose();
    }

    return (
        <div>
            <form className={style.formu} >
                <h1 class={style.titleModal}>Editar datos</h1>
                <div className={style.ctnGrid}>
                    <div className={style.InputForm} >
                        <label className={style.text}>Nombre</label >
                        <input className={style.input} name="fristName" type="text" value={input.fristName} onChange={onChange} />
                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Apellido</label >
                        <input className={style.input} name="lastName" type="text" value={input.lastName} onChange={onChange} />

                    </div>
                </div>

                <div className={style.ctnGrid}>
                    <div className={style.InputForm} >
                        <label className={style.text}>Documento</label >
                        <input className={style.input} name="document" type="text" value={input.document} onChange={onChange} />
                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Fecha de nacimiento</label >
                        <input className={style.input} name="dateOfBirth" type="text" value={input.dateOfBirth} onChange={onChange} />

                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Telefono</label >
                        <input className={style.input} name="telephone" type="text" value={input.telephone} onChange={onChange} />

                    </div>
                </div>


                <div className={style.ctnGrid}>
                    <div className={style.InputForm} >
                        <label className={style.text}>Direccion</label >
                        <input className={style.input} name="direccion" type="text" value={input.direction} onChange={onChange} />
                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Piso</label >
                        <input className={style.input} name="floor" type="text" value={input.floor} onChange={onChange} />

                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Departamento</label >
                        <input className={style.input} name="departament" type="text" value={input.department} onChange={onChange} />

                    </div>
                </div>

                <div className={style.ctnGrid}>
                    <div className={style.InputForm} >
                        <label className={style.text}>Estado/Provincia</label >
                        <input className={style.input} name="location" type="text" value={input.location} onChange={onChange} />
                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Ciudad</label >
                        <input className={style.input} name="city" type="text" value={input.city} onChange={onChange} />

                    </div>
                    <div className={style.InputForm} >
                        <label className={style.text}>Codigo postal</label >
                        <input className={style.input} name="postalCode" type="text" value={input.postalCode} onChange={onChange} />

                    </div>
                </div>

                <div className={style.ctnBtn}>
                    <button className={style.btn} onClick={handleSubmit} >Aceptar</button>
                    <button className={style.btn} onClick={onClose} >Cancelar</button>
                </div>

            </form>
        </div>
    )
}

export default FormEdit;