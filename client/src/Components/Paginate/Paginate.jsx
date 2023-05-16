//import css from "";
import React from "react";

const Paginate = (props) => {

    const {countriesPerPage, countries, paginate, currentPage} = props
    const totalPages = Math.ceil(countries, countriesPerPage);
    const pageNum = Array.from({ length:totalPages}, (_, i) => i + 1)

    return (
        <div className="">
            <ul className="">
                {pageNum.map((num) => (
                    <li key={num}>
                        <button
                            onClick={() => paginate(num)}
                            style={ num === currentPage
                                    ?   {
                                          backgroundColor: "#fd684d",
                                          color: "white",
                                          border: "1px solid #777db8",
                                        }
                                    : {} } > {num}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Paginate;