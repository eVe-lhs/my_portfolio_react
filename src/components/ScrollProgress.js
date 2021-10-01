import { motion, useViewportScroll } from "framer-motion";
import { useState } from "react";

const ScrollProgress = () => {
  const { scrollYProgress } = useViewportScroll();
  const [yprogress, setYprogress] = useState(0);
  scrollYProgress.onChange((progress) => setYprogress(progress));

  return (
    <motion.div
      className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 h-1 fixed z-100"
      style={{ width: `${yprogress * 100}%` }}
    />
  );
};

export default ScrollProgress;
