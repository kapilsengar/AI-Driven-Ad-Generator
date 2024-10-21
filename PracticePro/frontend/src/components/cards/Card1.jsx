import React, { useEffect, useState } from "react";
import data from '../../data/data';
const Card1 = () => {

  return (
    <div onClick={()=>{ navigate('/card1') }} id="slider-disable" className={`${!float ? "bg-white text-black font-roboto h-screen p-4 overflow-auto border-2" :"bg-white fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50 ml-52 mr-52 border border-black border-2 overflow-auto"}`}>
        <div>
          <header className="text-center border-b-2 border-black pb-2">
            <h1 className="text-xl font-bold">{head || "Fauget News"}</h1>
            <p className="text-right text-xs">{date || "Issue 3 March 2003"}</p>
          </header>

          <section className="text-center border-b-2 border-black py-2">
            <h2 className="text-lg font-bold">{subhead || "CLIMATE CHANGE"}</h2>
          </section>

          <section className="flex flex-col mt-2">
            <div className="p-2">
              <img alt="A flooded walkway with a bench and railing" className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
              <h3 className="text-lg font-bold  mt-1">{props?.articles ? articles[0].title.replace(/[#*]/g, "") : "The rising water"}</h3>
              <p className="text-xs  ">{props?.articles ? articles[0].body.replace(/[#*]/g, "").replace(/[#*]/g, "") : dummy}</p>
            </div>

            <div className="p-2">
              <img alt="An abandoned, flooded building with peeling paint" className="w-full h-24 object-cover border-4 border-purple-500" src="https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
              <h3 className="text-lg font-bold mt-1">{props?.articles ? articles[1].title : "An overflow of water"}</h3>
              <p className="text-xs mt-1">{props?.articles ? articles[1].body.replace(/[#*]/g, "").replace(/[#*]/g, "") : dummy}</p>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Card1;
