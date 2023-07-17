import css from "./paginate.module.css";
import React from "react";

const Paginate = ({ countriesPerPage, countries, currentPage, paginate, setCurrentPage }) => {
    const pageNumbers = [];
    //se calcula el numero total de paginas
    const totalPages = Math.ceil(countries / countriesPerPage);
  
    // Determinar el rango de páginas a mostrar
    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(startPage + 9, totalPages);
  
    // Crear un array con las páginas a mostrar
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    function handleButtonPrev() {
      if (currentPage !== 1) {
          setCurrentPage()
          window.scrollTo(0, 0);
        setCurrentPage(currentPage - 1);
      }
    }
    
    function handleButtonNext() {
      if (currentPage !== totalPages) {
        setCurrentPage()
        window.scrollTo(0, 0);
        setCurrentPage(currentPage + 1);
      }
    }

    return (
      <div className={css.pagination}>
        <button onClick={() => handleButtonPrev()}> prev </button>
        <ul>
          {pageNumbers.map((num) => (
            <li key={num}>
              <button
                onClick={() => paginate(num)}
                style={
                  num === currentPage
                    ? {
                        backgroundColor: "#082aa8",
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
        <button onClick={() => handleButtonNext()}> next </button>
      </div>
    );
  };
  
  export default Paginate;