import React from "react";
import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";

const Pricing = () => {
  return (
    <div className="w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single Place</h2>
          <p className="text-center text-4xl font-bold">1,000 php</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Display 1 place</p>
            <p className="py-2 border-b mx-8">Reach Customer</p>
            <p className="py-2 border-b mx-8">1 month free trial</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-[#ddead1] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Multiple Place & Business
          </h2>
          <p className="text-center text-4xl font-bold">5,000 php</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Display multiple place</p>
            <p className="py-2 border-b mx-8">
              Display multiple business in any location
            </p>
            <p className="py-2 border-b mx-8">1 month free trial</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Multiple Place
          </h2>
          <p className="text-center text-4xl font-bold">3,000 php</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Display multiple place</p>
            <p className="py-2 border-b mx-8">
              Display 1 business in any location
            </p>
            <p className="py-2 border-b mx-8">1 month free trial</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
