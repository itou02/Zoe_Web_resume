import React from "react";
// import "./Home.css";
import "../tailwind.css";

import drink from "../image/drink.jpg";

const Home: React.FC = () => (
    <div className="h-[100%] w-[100%]">
        <div className="bg-[rgb(234, 234, 234)] flex justify-evenly mt-[3%] px-[4%] h-[80%] w-full">
            <div className="relative bg-white w-full">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 h-full w-full">
                    <div className="px-6 pb-20 pt-10 lg:col-span-7 lg:px-0 xl:col-span-6 w-full">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                </div>
                            </div>
                            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-700 sm:mt-10 sm:text-6xl w-full">個人簡歷</h1>
                            <p className="mt-28 text-xl leading-8 text-gray-700">國立台中科技大學</p>
                            <p className=" text-lg leading-8 text-gray-600">郭佳棋</p>
                        </div>
                    </div>
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 h-full">
                    <img className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src={drink} alt="Zoe" />
                        
                    </div>
                </div>
            </div>
            {/* <div classNameName="w-[25%] max-h-[400px]">
                <div classNameName="h-full">
                </div>
            </div> */}

            {/* <div classNameName="right w-[50%] flex flex-col justify-center items-center">
                <div classNameName="text-[#4d443c]">
                    <h1 classNameName="text-3xl">國立台中科技大學 資管科</h1>
                    <h1 classNameName="text-3xl">郭佳棋</h1>
                    <h3 classNameName="text-3xl">Email：zoe2636@kimo.com</h3>
                    <h3 classNameName="text-3xl">GitHub：https://github.com/itou02</h3>
                    <h3 classNameName="text-3xl">Linkin：https://www.linkedin.com/in/zoe-mylife</h3>
                    <h4 classNameName="mt-3 text-3xl">擅長前端網頁與資料處理，對於開發的部分仍在學習中。在團隊中通常擔任前端頁面開發與設計、文書處理、檢核專案及協調團隊溝通的人員。</h4>
                </div>
            </div> */}
        </div>
    </div>


);

export default Home;