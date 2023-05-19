import css from "./paginate.module.css";
import React from "react";

const Paginate = ({ countriesPerPage, countries, currentPage, paginate }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(countries / countriesPerPage);
  
    // Determinar el rango de páginas a mostrar
    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(startPage + 9, totalPages);
  
    // Crear un array con las páginas a mostrar
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className={css.pagination}>
        <ul>
          {pageNumbers.map((num) => (
            <li key={num}>
              <button
                onClick={() => paginate(num)}
                style={
                  num === currentPage
                    ? {
                        backgroundColor: "#fd684d",
                        color: "white",
                        border: "1px solid #777db8",
                      }
                    : {}
                }
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Paginate;