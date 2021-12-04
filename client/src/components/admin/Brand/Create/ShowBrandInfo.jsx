import { Style } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ShowBrandInfo.module.css";

const ShowBrandInfo = () => {

  const dispatch = useDispatch();
  const { brandInfo } = useSelector((state) => state.brand);

  const handleDeleteCat = (e) => {
    
  }

  const handleDeleteSub = (e) => {
    
  }

  const handleSave = () => {

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
                c.subcategories?.map((sub) => {
                  return (
                    <div className={style.subcategory}>
                      <h5>{sub}</h5>
                      <button value={sub} onClick={handleDeleteSub}>X</button>
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
