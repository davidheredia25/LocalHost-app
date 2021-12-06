import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Styles/ShowBrandInfo.module.scss";
import { deleteBrandCategory, saveNewBrand } from "../../../redux/actions/brand.actions";

const ShowBrandInfo = () => {

  const dispatch = useDispatch();
  const { brandInfo } = useSelector((state) => state.brand);

  const handleDeleteCat = (e) => {
    dispatch(deleteBrandCategory(e.target.value))
  }

  const handleSave = () => {
    dispatch(saveNewBrand(brandInfo))
  }

  return (
    <div className={style.ctnBrand}> 
      <h2 className={style.title}>{brandInfo.name?.toUpperCase()}</h2>
      {
        brandInfo.categories?.map((c) => {
          return (
            <div>
              <div className={style.category}>
                <p className={style.categoryName}>  {c.name.toUpperCase()}  <button className={style.btnX}  value={c.name} onClick={handleDeleteCat}>X</button></p>
               
              </div>
              <div>
              {
                c.types?.map((sub) => {
                  return (
                    <div className={style.subcategory}>
                      <p className={style.categoryName}>{sub.charAt(0).toUpperCase() + sub.slice(1)}</p>
                    </div>
                  );
                })
              }
              </div>
            </div>
          )
        })
      }
      <button className={style.btn} onClick={handleSave}>GUARDAR MARCA</button>
    </div>
  );
};

export default ShowBrandInfo;
