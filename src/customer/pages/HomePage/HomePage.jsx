import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { testData } from "../../../data/testData";

const HomePage = () => {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={testData} sectionName={"Áo Phông Nam"} />
        <HomeSectionCarousel data={testData} sectionName={"Áo Khoác Nam"} />
        <HomeSectionCarousel data={testData} sectionName={"Quần Nam"} />
        <HomeSectionCarousel data={testData} sectionName={"Giày Nam"} />
      </div>
    </div>
  );
};

export default HomePage;
