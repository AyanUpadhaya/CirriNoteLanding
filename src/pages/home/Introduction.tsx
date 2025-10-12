import { motion } from "framer-motion";
import { note } from "@/assets/getAssets";

export default function Introduction() {
  return (
    <section className="bg-dark_soft_gray bg-fixed p-10 py-[229px] mb-[128px] h-screen flex justify-center items-center sticky top-0 overflow-hidden">
      <div className="space-y-[60px] flex flex-col items-center text-center">
        {/* Top Text */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }} // 👈 triggers when 40% visible
          className="text-white font-manrope font-medium text-[48px]"
        >
          An extraordinary note <br /> for{" "}
          <span className="text-[#00BB77]">makers, creators..</span>
        </motion.h2>

        {/* Image (drops fast with bounce) */}
        <motion.img
          src={note}
          alt="note illustration"
          initial={{ y: -200, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Bottom Text */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-white font-manrope font-medium text-xl"
        >
          Creators around the planet use this app <br /> for creating{" "}
          <span className="text-[#00BB77]">magic</span>
        </motion.p>
      </div>
    </section>
  );
}
