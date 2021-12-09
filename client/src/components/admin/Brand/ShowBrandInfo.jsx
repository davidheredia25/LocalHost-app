import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Styles/ShowBrandInfo.module.scss";
import { deleteSubcategory, deleteCategory } from "../../../redux/actions/brand.actions";

const ShowBrandInfo = () => {

  const dispatch = useDispatch();
  const { brandInfo } = useSelector((state) => state.brand);


  const handleDeleteBrand = () => {

  }

  const handleDeleteCat = (e) => {
    let obj = {
      brand: brandInfo.name,
      category: e.target.value
    }
    dispatch(deleteCategory(obj))
  }

  const handleDeleteSub = (e) => {
    let { name, value } = e.target;
    let obj = {
      brand: brandInfo.name, 
      category: name,
      type: value
    }
    dispatch(deleteSubcategory(obj))
  }

  return (
    <div className={style.ctnBrand}> 
      <div>
        <h2 className={style.title}>{brandInfo.name?.toUpperCase()}</h2>
        <button>ELIMINAR MARCA</button>
      </div>
      {
        brandInfo.categories?.map((c) => {
          return (
            <div>
              <div className={style.category}>
                <p className={style.categoryName}>  {c.name.toUpperCase()}  
                  <button className={style.btnX} value={c.name} onClick={handleDeleteCat}>X</button>
                </p>
               
              </div>
              <div>
              {
                c.types?.map((sub) => {
                  return (
                    <div className={style.subcategory}>
                      <p className={style.categoryName}>{sub.charAt(0).toUpperCase() + sub.slice(1)}
                        <button className={style.btnX} name={c.name} value={sub} onClick={handleDeleteSub}>X</button>
                      </p>
                    </div>
                  );
                })
              }
              </div>
            </div>
          )
        })
      }
      {/* <button className={style.btn} onClick={handleSave}>GUARDAR MARCA</button> */}
    </div>
  );
};

export default ShowBrandInfo;
