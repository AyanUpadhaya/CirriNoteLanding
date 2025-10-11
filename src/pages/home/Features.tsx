function Featured() {
  return (
    <div className="bg-cold_gray hover:bg-transparent hover:border-2 hover:border-[#00BB77] transitio duration-200 ease-in-out p-10 h-[320px] rounded-2xl flex flex-col justify-between">
      <div></div>
      <h3 className="text-white font-manrope text-[32px] leading-[38px] tracking-[-0.64px]">
        Feature Name
      </h3>
    </div>
  );
}

export default function Features() {
  return (
    <section className="pt-[180px] pb-[273px] sticky top-0 bg-dark px-10  z-50">
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

        <div className="grid grid-cols-3 gap-3  mb-[17px]r">
          <div className="col-span-2 flex flex-col justify-center">
            <h3 className="text-primary font-manrope text-[48px] leading-[52px] tracking-[-1.44px]">
              Creative people worldwide rely <br /> on this app to craft ideas{" "}
              <br /> into digital magic.
            </h3>
          </div>
          <Featured></Featured>
        </div>

        <div className="grid grid-cols-3 gap-[17px] ">
          <Featured></Featured>
          <Featured></Featured>
          <div className=" p-10 h-[320px] rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
