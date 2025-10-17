import { insta, linkedin, logo, twitter } from "@/assets/getAssets";


export default function Footer() {
  return (
    <div id="contact" className="px-10 bg-dark_gray py-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[64px]">
        {/* row 1 */}
        <div className="flex justify-between items-center gap-[80px]">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-3">
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="#">
              <img src={insta} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex justify-between">
          <span className="font-manrope font-medium text-sm text-footerText leading-[19.6px] tracking-[-0.28px]">
            © CirriNote 2025
          </span>
          <span className="font-manrope font-medium text-sm text-footerText leading-[19.6px] tracking-[-0.28px]">
            Crafted with passion by CreoWis
          </span>
        </div>
      </div>
    </div>
  );
}
