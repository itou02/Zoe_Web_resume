import React from "react";
// import "./Home.css";
import "../tailwind.css";

import drink from "../image/drink.jpg";

const Ex: React.FC = () => (

        <div className="bg-[rgb(234, 234, 234)] flex justify-evenly mt-[2%] p-[3%]">
            <div className="w-[25%] max-h-[400px]">
                <div className="h-full">
                    <img className="w-full h-full object-cover" src={drink} alt="Zoe" />
                </div>
            </div>
            <div className="right w-[50%] flex flex-col justify-center items-center">
                <div className="text-[#4d443c]">
                    <h1 className="text-3xl">國立台中科技大學 資管科</h1>
                    <h1 className="text-3xl">郭佳棋</h1>
                    <h3 className="text-3xl">Email：zoe2636@kimo.com</h3>
                    <h3 className="text-3xl">GitHub：https://github.com/itou02</h3>
                    <h3 className="text-3xl">Linkin：https://www.linkedin.com/in/zoe-mylife</h3>
                </div>
            </div>
        </div>

);

export default Ex;