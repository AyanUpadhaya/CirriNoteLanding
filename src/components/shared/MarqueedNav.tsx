import { star } from "@/assets/getAssets";
import Marquee from "react-fast-marquee";

export default function MarqueedNav() {
  return (
    <div className="py-[10px] h-10 sticky top-0  bg-topnav w-full">
      <Marquee>
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Get one year FREE
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Only for limited users
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Join the launch event
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Get one year FREE
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Only for limited users
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Join the launch event
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Get one year FREE
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Only for limited users
        </div>
        <img src={star} alt="star" />
        <div className="text-white mx-[48px] text-sm font-medium font-manrope leading-4">
          Join the launch event
        </div>
        <img src={star} alt="star" />
      </Marquee>
    </div>
  );
}
