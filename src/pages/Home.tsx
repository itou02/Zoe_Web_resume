import React, { useState } from "react";
import "../tailwind.css";
import zoe from "../image/zoe.jpg";
import card from "../image/card.png";
import home from "../image/home.png";
import reserve from "../image/reserve.png";
import record from "../image/record.png";
import backend from "../image/backend.png";
import mypet from "../image/mypet.jpg";
import adoption from "../image/adoption.jpg";
import petdetail from "../image/petdetail.jpg";
import expet from "../image/expet.jpg";



const Home: React.FC = () => {

    const email = 'zoe@kimo.com';
    const phone = '0905638773';
    const github = 'https://github.com/itou02';

    const [isResumeExpanded, setIsResumeExpanded] = useState(false);
    const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
    const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
    const [isEducationExpanded, setIsEducationExpanded] = useState(false);
    const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
    const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);

    const skills = [
        {
            name: 'React.js+Ant Design',
            description: '擅長使用此前端框架來進行頁面開發',
        },
        {
            name: 'PHP Laravel',
            description: '前端所需新增、查詢、刪除、修改之API',
        },
        {
            name: 'Git',
            description: '使用Git做版本控制',
        },
    ];
    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="bg-stone-400 py-16">
                <div className="container mx-auto p-4">
                    <div className="flex flex-row justify-center items-center">
                        <img src={zoe} className="rounded-full w-32 h-32" />
                        <div className="ml-6">
                            <p className="text-3xl font-semibold text-white">郭佳棋</p>
                            <ul className="text-white">
                                <p>Phone: {phone}</p>
                                <p>Email: {email}</p>
                                <a href="https://github.com/itou02">GitHub: {github}</a>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" xl:max-w-4xl 2xl:max-w-5xl mx-auto p-4 pb-8 mt-8">
                <div className="mt-4 p-4 bg-white rounded-md">
                    <button
                        className="w-full flex text-2xl font-bold focus:outline-none"
                        onClick={() => setIsResumeExpanded(!isResumeExpanded)}
                    >
                        簡歷
                    </button>
                    {isResumeExpanded && (
                        <div className="text-xl py-2 px-3">
                            來自雲林，目前就讀於國立台中科技大學資訊應用菁英班五年級。<br />
                            擅長前端網頁與資料處理，對於開發的部分仍在學習中。<br />在團隊中通常擔任前端頁面開發與設計、文書處理、檢核專案及協調團隊溝通的人員。
                        </div>
                    )}
                </div>
                <div className="mt-4 p-4 bg-white rounded-md">
                    <button
                        className="w-full flex text-2xl font-bold focus:outline-none"
                        onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                    >
                        工作經驗
                    </button>
                    {isExperienceExpanded && (
                        <div className="text-xl py-2 px-3">
                            <p>Trunk Studio 創科資訊</p>
                            <li>實習生 <span className="text-base">2022/12/12 - 2023/06/30</span></li>
                        </div>
                    )}
                </div>
                <div className="mt-4 p-4 bg-white rounded-md">
                    <button
                        className="w-full flex text-2xl font-bold focus:outline-none"
                        onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                    >
                        專案與作品集
                    </button>
                    {isProjectsExpanded && (
                        <div className="text-xl py-2 px-3">
                            <div className="bg-gray-200 min-h-screen">
                                <div className="container mx-auto p-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">IZA's Furry 寵物美容預約平台</h2>
                                            <div className="grid grid-cols-2 items-center">
                                                <img src={home} className="rounded-md mb-4 shadow-md" />
                                                <img src={reserve} className="rounded-md mb-4 shadow-md" />
                                                <img src={backend} className="rounded-md mb-4 shadow-md" />
                                                <img src={record} className="rounded-md mb-4 shadow-md" />
                                            </div>
                                            <p className="text-gray-700">此專案是個可以進行預約以及購買寵物相關用品的平台，也具備後台管理系統，管理者有專屬帳號對商品及方案進行管理。
                                                在這個專案裡我負責的是資料庫的規劃與建置，登入頁面、預約功能的頁面設計和開發。</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Pet Go 寵物去哪兒</h2>
                                            <div className="grid grid-cols-2 items-center">
                                                <img src={petdetail} className="rounded-md mb-4 shadow-md" />
                                                <img src={adoption} className="rounded-md mb-4 shadow-md" />
                                                <img src={mypet} className="rounded-md mb-4 shadow-md" />
                                                <img src={expet} className="rounded-md mb-4 shadow-md" />
                                            </div>
                                            <p className="text-gray-700">提供使用者在平台上進行飼養寵物的交流與媒合，也會進行相關紀錄。
                                                我負責的部分是前端頁面設計與開發、串接資料和文件整合的部分。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-4 p-4 bg-white rounded-md">
                    <button
                        className="w-full flex text-2xl font-bold focus:outline-none"
                        onClick={() => setIsEducationExpanded(!isEducationExpanded)}
                    >
                        學歷
                    </button>
                    {isEducationExpanded && (
                        <div className="text-xl py-2 px-3">
                            <p>國立台中科技大學 五專部</p>
                            <li>資訊應用菁英班 <span className="text-base">2018 - 2023</span></li>
                        </div>
                    )}
                </div>
                <div className="mt-4 p-4 bg-white rounded-md">
                    <button
                        className="w-full flex text-2xl font-bold focus:outline-none"
                        onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
                    >
                        專業技能
                    </button>
                    {isSkillsExpanded && (
                        <div className="text-xl py-2 px-3">
                            <div className="bg-gray-200">
                                <div className="container mx-auto p-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                                <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
                                                <p className="text-gray-700">{skill.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-4 p-4 bg-white rounded-md">
                    <button
                        className="w-full flex text-2xl font-bold focus:outline-none"
                        onClick={() => setIsLanguagesExpanded(!isLanguagesExpanded)}
                    >
                        語言能力
                    </button>
                    {isLanguagesExpanded && (
                        <div className="text-xl py-2 px-3">
                            <div className="bg-gray-200">
                                <div className="container mx-auto p-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold">閩南語 - 母語</h2>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold">日語 - 略懂</h2>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold">英語 - 略懂</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};



export default Home;