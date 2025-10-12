
import { octupas } from "@/assets/getAssets";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="bg-heroBg bg-no-repeat bg-cover bg-center h-screen relative flex justify-center items-center">
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* Left Text - Slides in from left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-4 absolute top-44 z-20"
        >
          <h2 className="font-manrope font-medium text-[80px] leading-[88px]">
            Note Taking
          </h2>
        </motion.div>

        {/* Center Image - Fades in after text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <img src={octupas} alt="Hero" className="relative " />
          </div>
        </motion.div>

        {/* Right Text - Slides in from right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#00BB77] space-y-4 text-right absolute bottom-[340px] right-10 z-20"
        >
          <h2 className="font-manrope font-medium text-[80px] leading-[88px]">
            Redefined
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
