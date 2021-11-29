import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCreate } from "../../../redux/actions/Crud.actions.js";
import {
  getBrands,
  getCategories,
  getSubcategories,
} from "../../../redux/actions/brand.actions.js";
import NavBar from "../../user/NavBar/NavBar";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    brand: "",
    categories: "",
    types: "",
    price: "",
    color: [],
    talle: [],
    stock: 1,
    description: "",
    image: [],
  });

  // const {color, size} = useSelector(state => state.prodcuts)
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
      categories: "",
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
      console.log("VALUE!!!", e.target.value)
        setForm({
            ...form,
            brand: e.target.value
        });
  };
  const selectCategoria = (e) => {
    console.log("VALUE!!!", e.target.value)
      setForm({
      ...form,
      categories: e.target.value
      });
};
const selectSubcategoria = (e) => {
    console.log("VALUE!!!", e.target.value)
      setForm({
        ...form,
        types: e.target.value
      });
};

  return (
    <div>
      <NavBar />
      <form>
        <div>
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre.."
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Descripcion </label>
          <input
            name="description"
            type="text"
            placeholder="Descripcion.."
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Precio</label>
          <input
            name="price"
            type="number"
            placeholder="Precio.."
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Color</label>
          <input
            name="color"
            type="text"
            placeholder="Color.."
            value={form.color}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Talle</label>
          <input
            name="talle"
            type="text"
            placeholder="Talle..."
            value={form.talle}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Imagen</label>
          <input
            name="image"
            type="text"
            placeholder="Imagen.."
            value={form.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <select onChange={selectMarca}>
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

        <div>
          <select onChange={selectCategoria}>
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
        </div>

        <div>
          <select onChange={selectSubcategoria}>
            <option selected value="">
              Selecciona la SubCategoria
            </option>
            {subcategories?.map((e) => {
              return (
                <option name="types" value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>

        <button onClick={handleClick}>Crear</button>
      </form>
    </div>
  );
};

export default CreateProduct;
