import React from "react";
import Star from "../assests/star-2.svg";
import Star1 from "../assests/star-05.png";
import Icon from '../assests/Icon.png'
import Cube from '../assests/cube-04.png'
import Bg from "../assests/Group 35930.png";
import Mobile1 from "../assests/group-35933@2x.png";
import Mobile2 from "../assests/group-35935@2x.png";
import Bg1 from "../assests/Group 35897.png";
import Bg2 from "../assests/Group 35931.png";
import Bg3 from "../assests/Group 35932.png"
import Notification from '../assests/Group 35899.png'


const Features = () => {
  return (
    <div className="ml-[5%] flex flex-col gap-5  h-[100%]">
      {/* First */}
      <div className="h-[100%] md:flex mt-20  md:h-[500px] items-center">
        <div className="md:w-[55%] relative flex flex-col justify-start">
          <img src={Bg} alt="" className="self-start " />
          <div className="absolute top-20 -left-10">
            <img src={Star} alt="" />
          </div>

          <div className=" absolute top-0 left-10">
            <img src={Mobile1} alt="" />
          </div>
        </div>

        <div className="md:w-[45%] space-y-2 pt-10">
          <p className="uppercase text-[#FF5555]">Features</p>
          <p className="text-4xl font-bold">Uifry Premium</p>

          <div className="relative">
            <div className="flex items-center gap-2 pt-6 py-4">
              <img src={Star1} alt="" />
              <p className="font-bold">Budgeting Intervals</p>
            </div>
            <p className="opacity-50">
              Cum EtConvallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet{" "}
              <br></br> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
              Porttitor.
            </p>

            <div className="flex items-center gap-2 pt-6 py-4">
              <img src={Icon} alt="" />
              <p className="font-bold">Budgeting Intervals</p>
            </div>
            <p className="opacity-50">
              Cum EtConvallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet{" "}
              <br></br> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
              Porttitor.
            </p>

            <div className="flex items-center gap-2 pt-6 py-4">
              <img src={Cube} alt="" />
              <p className="font-bold">Budgeting Intervals</p>
            </div>
            <p className="opacity-50">
              Cum EtConvallis Risus Placerat Aliquam,Nunc,Scelerisque Aliquet{" "}
              <br></br> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
              Porttitor.
            </p>

            <img src={Bg1} alt="" className="absolute -top-10  right-0" />
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="h-[100%]  md:flex mt-20  md:h-[500px] items-center">
        <div className="w-[65%] space-y-5 pt-10 md:ml-[10%]">
          <p className="uppercase text-[#FF5555]">Advatnages</p>
          <p className="text-4xl font-bold">Why Choose Uifry?</p>

          <div className="relative">
            <div className="flex items-center gap-2 pt-6 py-5">
              <img src={Notification} alt="" />
              <p className="font-bold">Clever Notifications</p>
            </div>
            <p className="opacity-50">
              Arcus At Dictum Sapien,Mollis.Vulputato Sit Id Accumsan,<br></br>Ultricies.In Ultricies Malesuada Elit Mauris Etiam Odio.Duis<br></br>Tristique Lacus,EtBlandit Viverra Nisl Velt.Sed Mattis<br></br>Rhoncus,Diam Suspendisse Sit Nunc,GravidaEu.Lectus Eget<br></br>Eget Ac Dolor Neque Lorem Sapien,Suspendisse Aliquam.
            </p>

           

            
          </div>
        </div>

        {/* <div className="col-span-1 relative">
          <img src={Bg} alt="" className="self-end " />
          <div className="absolute top-20 -left-20">
            <img src={Star} alt="" />
          </div>

          <div className="absolute top-0 left-10">
            <img src={Mobile1} alt="" />
          </div>
        </div> */}

        <div className="md:w-[65%] relative flex flex-col justify-start ">
          <img src={Bg2} alt="" className="self-end bottom-0" />
          <div className="absolute top-20 right-0">
            <img src={Star} alt="" />
          </div>

          <div className="absolute top-0 left-10">
            <img src={Mobile2} alt="" className="w-[100%]"/>
          </div>
        </div>
      </div>

      {/* Third */}
      <div className="h-[100%] md:flex mt-20  md:h-[500px] items-center">
        <div className="md:w-[65%] relative">
          <img src={Bg3} alt="" className="self-start " />
          <div className="absolute top-20 -right-0">
            <img src={Star} alt="" />
          </div>

          <div className="absolute top-0 left-10">
            <img src={Mobile1} alt="" />
          </div>
        </div>

        <div className="md:w-[45%] space-y-5 pt-10 ml-[5%]">
          <p className="uppercase text-[#FF5555]">Advatnages</p>
          <p className="text-4xl font-bold">Why Choose Uifry?</p>

          <div className="relative">
            <div className="flex items-center gap-2 pt-6 py-5">
              <img src={Notification} alt="" />
              <p className="font-bold">Clever Notifications</p>
            </div>
            <p className="opacity-50">
              Arcus At Dictum Sapien,Mollis.Vulputato Sit Id Accumsan,<br></br>Ultricies.In Ultricies Malesuada Elit Mauris Etiam Odio.Duis<br></br>Tristique Lacus,EtBlandit Viverra Nisl Velt.Sed Mattis<br></br>Rhoncus,Diam Suspendisse Sit Nunc,GravidaEu.Lectus Eget<br></br>Eget Ac Dolor Neque Lorem Sapien,Suspendisse Aliquam.
            </p>

           

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

