import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCreate } from "../../../../redux/actions/Crud.actions.js";
import {
  getBrands,
  getCategories,
  getSubcategories,
} from "../../../../redux/actions/brand.actions.js";
import style from "../Style/CreateProduct.module.scss"

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    brand: "",
    categories: [],
    types: "",
    price: "",
    color: [],
    talle: [],
    stock: 1,
    description: "",
    image: [],
  });


  const [talleObj, setTalleObj] = useState({
    name: "",
    stockTalle: 0
  })

  const { talles } = useSelector(state => state.admin)
  const { brands, categories, subcategories } = useSelector(
    (state) => state.brand
  );
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getSubcategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(productCreate(form));
    setForm({
      name: "",
      brand: "",
      categories: [],
      types: "",
      price: "",
      color: [],
      talle: [],
      stock: 1,
      description: "",
      image: [],
    });
    // setForm({
    //     ...form,
    //     product: [...product, form]
    // })
  };

  const selectMarca = (e) => {
    setForm({
      ...form,
      brand: e.target.value
    });
  };
  const selectCategoria = (e) => {
    setForm({
      ...form,
      categories: [...form.categories, e.target.value]
    });
  };
  const selectSubcategoria = (e) => {
    setForm({
      ...form,
      types: e.target.value
    });
  };

  const selectTalle = (e) => {
    setTalleObj({
      ...talleObj,
      name: e.target.value
    })
  }

  const addTalleObj = () => {
    setForm({
      ...form,
      talle: [...form.talle, talleObj]
    })
    setTalleObj({
      name: "",
      stockTalle: 0
    })
  }


  return (


    <form className={style.formu}>
      <h1 className={style.titleform}>Crear productos</h1>
      
      {/* div */}
      <div className={style.ctnGrid}>
        <div className={style.InputForm} >
          <label className={style.text}>Nombre</label>
          <input 
            className={style.input} 
            name="name" 
            type="text" 
            placeholder="Nombre.." 
            value={form.name} 
            onChange={handleChange} 
          />
        </div>
        
        <div className={style.InputForm}>
          <label className={style.text}>Descripcion </label>
          <input 
            className={style.input} 
            name="description" 
            type="text" 
            placeholder="Descripcion.." 
            value={form.description} 
            onChange={handleChange} 
          />
        </div>
      </div>

      {/* div */}
      <div className={style.ctnGrid}>
        <div className={style.InputForm}>
          <label className={style.text}>Precio</label>
          <input 
            className={style.input} 
            name="price" 
            type="number" 
            placeholder="Precio.." 
            value={form.price} 
            onChange={handleChange} 
          />
        </div>

        <div className={style.InputForm}>
          <label className={style.text}>Color</label>
          <input 
            className={style.input} 
            name="color" 
            type="text" 
            placeholder="Color.." 
            value={form.color} 
            onChange={handleChange} 
          />
        </div>
      </div>

      {/* div */}
      <div className={style.ctnGrid}>
        <div className={style.InputForm}>
          <label className={style.text}>Imagen</label>
          <input 
            className={style.input} 
            name="image" 
            type="text" 
            placeholder="Imagen.." 
            value={form.image} 
            onChange={handleChange} 
          />
        </div>
      </div>

      {/* div */}
      <div className={style.ctnGrid}>
        <div className={style.InputForm}>
          <select className={style.input1} onChange={selectMarca}>
            <option selected value={form.brand}>
              Selecciona la Marca
            </option>
            {brands?.map((e) => {
              return (
                <option name="brand" value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={style.InputForm}>
          <select className={style.input1} onChange={selectCategoria}>
            <option selected value="">
              Selecciona la Categoria
            </option>
            {categories?.map((e) => {
              return (
                <option name="categories" value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
          {/* crea una nueva categoría
          <input /> */}
        </div>

        <div className={style.InputForm}>
          <select className={style.input1} onChange={selectSubcategoria}>
            <option selected value="">
              Selecciona la SubCategoria
            </option>
            {subcategories?.map((e) => {
              return (

                <option name="types" value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          {/* crea una nueva subcategoría
          <input /> */}
        </div>
        <div className={style.InputForm}>
          <label className={style.text}>Talle</label>
          <select className={style.input1} onChange={selectTalle}>
            <option selected value={form.brand}>
              Selecciona Talle
            </option>
            {talles?.map((e) => {
              return (
                <option name="talle" value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <div>
            {
              talleObj.name &&
                <div>
                  <h4>{talleObj.name}</h4>
                  <input 
                    value={talleObj.stockTalle} 
                    type="number" 
                    min="0" 
                    onChange={(e) => setTalleObj({...talleObj, stockTalle: e.target.value})} 
                  />
                  <button onClick={addTalleObj}>GUARDAR</button>
                </div> 
            }
          </div>
        </div>
        {
          form.talle.map(obj => {
            return (
              <div>
                <p>{obj.name}</p>
                <p>{obj.stockTalle}</p>
              </div>
            )
          })
        }
      </div>

      <button className={style.btn} onClick={handleClick}>CREAR</button>

    </form>


  );
};

export default CreateProduct;
