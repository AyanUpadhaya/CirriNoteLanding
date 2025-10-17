import { ArrowUpRight } from "lucide-react";

function Featured() {
  return (
    <div className="group relative bg-cold_gray hover:bg-transparent hover:border-2 hover:border-[#00BB77] transition-all duration-500  p-10 h-[320px] rounded-2xl flex flex-col justify-between">
      {/* Arrow */}
      {/* Arrow with scale effect */}
      <ArrowUpRight
        size={87}
        className="absolute top-8 right-7 text-featureCardHoverBorder opacity-0 transform translate-x-[-40px] translate-y-[40px] scale-50 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100"
      />

      {/* Text */}
      <div className="absolute bottom-10 left-10">
        <p className="text-white font-manrope text-[32px] leading-[38px] tracking-[-0.64px]">
          Feature Name
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="pt-[180px] pb-[273px] sticky top-0 bg-dark px-10  z-50"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[80px]">
          <div className="mb-[17px]">
            <button className="w-[132px] py-[5px] px-[11] h-auto rounded-full bg-[#00BB77]">
              <span className="text-sm font-manrope font-medium tracking-[-0.93px] leading-[19.6px]">
                Whats the best
              </span>
            </button>
          </div>
          <h2 className="font-manrope font-medium text-white text-[80px] mb-4 leading-[80px] tracking-[-3.2px]">
            Key Features
          </h2>
          <p className="text-primary font-medium font-manrope text-xl leading-7 tracking-[0.4px]">
            We’re proud to announce with the features <br /> that empower
            creatives every day.
          </p>
        </div>

        {/* features */}
        {/* top grid */}
        <div className="grid grid-cols-3 gap-[17px] ">
          <Featured></Featured>
          <div className=" p-10 h-[320px] rounded-2xl"></div>
          <Featured></Featured>
        </div>
        <div className="grid grid-cols-3 gap-[17px] ">
          <div className=" p-10 h-[320px] rounded-2xl"></div>
          <Featured></Featured>
          <div className=" p-10 h-[320px] rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 flex flex-col justify-center">
            <h3 className="text-primary font-manrope text-[48px] leading-[52px] tracking-[-1.44px]">
              Creative people worldwide rely <br /> on this app to craft ideas{" "}
              <br /> into digital magic.
            </h3>
          </div>
          <Featured></Featured>
        </div>

        <div id="faqs" className="grid grid-cols-3 gap-[17px] ">
          <Featured></Featured>
          <Featured></Featured>
          <div className=" p-10 h-[320px] rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
