import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ShowBrandInfo.module.css";
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
    <div>
      <h2>{brandInfo.name?.toUpperCase()}</h2>
      {
        brandInfo.categories?.map((c) => {
          return (
            <div>
              <div className={style.category}>
                <h4>{c.name.toUpperCase()}</h4>
                <button value={c.name} onClick={handleDeleteCat}>X</button>
              </div>
              <div>
              {
                c.types?.map((sub) => {
                  return (
                    <div className={style.subcategory}>
                      <h5>{sub}</h5>
                    </div>
                  );
                })
              }
              </div>
            </div>
          )
        })
      }
      <button onClick={handleSave}>GUARDAR MARCA</button>
    </div>
  );
};

export default ShowBrandInfo;
