import { cart, logo } from "@/assets/getAssets";

export default function Navbar() {
  const menus = [
    {
      id: 1,
      title: "About",
      path: "#about",
    },
    {
      id: 2,
      title: "Features",
      path: "#features",
    },
    {
      id: 3,
      title: "FAQs",
      path: "#faqs",
    },
    {
      id: 4,
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <>
      
      <div className="sticky top-0 left-0 z-[9999] w-full py-6 backdrop-blur-3xl">
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-[6px]">
          <div>
            <img src={logo} alt="logo image" className="max-w-[169px] h-auto" />
          </div>

          {/* menus */}
          <ul className="px-[10px] py-[10px] flex gap-[64px] items-center">
            {menus.map((item) => (
              <li key={item.id}>
                <a
                  className="font-manrope font-medium text-sm text-white leading-[19.6px] tracking-[-0.28px] no-underline"
                  href={item?.path}
                >
                  {item?.title}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="group relative cursor-pointer flex items-center space-x-2  text-dark bg-white border-2 border-white
                w-[167px] h-[56px]  rounded-full"
          >
            <div className="absolute inset-0 w-[52px] h-[52px] rounded-full bg-black group-hover:w-full transition-all duration-300 ease-in-out"></div>
            <div className="relative z-10 left-[5px] top-0 flex gap-[30px] font-manrope items-center">
              <img
                src={cart}
                className="w-6 h-6 group-hover:w-7 group-hover:h-7 duration-300"
                alt="cart"
              />
              <span className="group-hover:text-white font-manrope font-medium text-lg">
                Try Now
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
