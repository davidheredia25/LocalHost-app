import React from "react";
import { useSelector } from "react-redux";

const ShowBrandInfo = () => {
  const { brandInfo } = useSelector((state) => state.brand);

  return (
    <div>
      <h2>Categorias</h2>
      {brandInfo.categories?.map((c) => {
        return (
          <div>
            <h4>{c.name}</h4>
            {c.subcategories?.map((s) => {
              return (
                <div>
                  <h2>SubCategorias</h2>
                  <h4>{s}</h4>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ShowBrandInfo;
