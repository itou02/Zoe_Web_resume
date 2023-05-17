import React from "react";
// import "./About.css";
import "../tailwind.css";

import taro from "../image/taro.jpg";
import kin from "../image/kin.jpg";
import me from "../image/mountain.jpg";


const About: React.FC = () => (
        <div className="bg-[rgb(234, 234, 234)] flex flex-col justify-between items-center mt-[2%]">
            <h1 className="text-[#4d443c] text-4xl mb-6">我的愛寵</h1>
            <div className="w-[50%] h-full flex mx-auto justify-between">
                <div className="h-full m-[2%]">
                    <img className="w-full h-full" src={taro} alt="Taro" />
                </div>
                <div className="cat">
                    <img src={kin} alt="Taro" />
                </div>
            </div>
            <hr />
            <div className="w-[90%] flex flex-col justify-center items-center bg-[rgb(238, 237, 236)]">
                <div className="w-full flex flex-col items-center text-[#4d443c]">
                    <h1 className="text-4xl mb-6">我的興趣</h1>
                    <div className="w-full flex flex-row justify-evenly">

                        <h2 className="text-3xl">爬山</h2>
                        <h2 className="text-3xl">打球</h2>
                        <h2 className="text-3xl">吃東西</h2>
                    </div>
                    <div className="w-full flex flex-row justify-evenly">
                        <img className="w-[70%]" src={me} alt="me" />
                    </div>

                </div>
            </div>
        </div>
);

export default About;