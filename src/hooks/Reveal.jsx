import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({children, delay}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const delayTime = delay || 0.25

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);


  return (
    <>
      <div ref={ref} style={{overflow: "hidden" }}>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delayTime}}
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}

export default Reveal;