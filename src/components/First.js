import React from "react";
import tag from "../assests/tag.png";
import Star from "../assests/star-2.svg";
import vector from '../assests/Vector 1.png'
import video from '../assests/Group 3.png'
import firstmobile from "../assests/firstmobile.png";
import Secondmobile from "../assests/Secondmobile.png";
import Thirdmobile from "../assests/Thirdmobile.png";

const First = () => {
  return (
    <div className="w-[80%]  xl:flex mx-auto  justify-between">
      <div className="xl:w-[55%] space-y-5 h-full">
        <p className="capitalize text-6xl flex-wrap font-bold">
          Make the best financial decisions
        </p>
        <p className="opacity-50 text-lg">
          Cum EtConvallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet{" "}
          <br></br> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
          Porttitor.
        </p>

        <div className="md:flex items-center">
          <button className="bg-black px-8 py-5 text-white flex items-center gap-4">
            Get Started
            <img src={vector} alt=''/>
          </button>
          <button className=" px-8 py-5 flex items-center gap-4">
          <img src={video} alt=''/>
            Watch Video
            </button>
        </div>

        <div className="h-full w-full relative">
          <img src={tag} alt="" />
          <div className="absolute top-10 left-20">
            <img src={Star} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden xl:w-[40%] xl:flex ">
        <div className="h-full w-[100%] relative">
          <img src={firstmobile} alt="" className="h-[800px]" />
          <div className="absolute top-20 -left-18">
            <img src={Secondmobile} alt="" className="h-[600px] w-[90%]" />
          </div>

          <div className="absolute -top-20 -left-36">
            <img src={Thirdmobile} alt="" className="h-[700px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
