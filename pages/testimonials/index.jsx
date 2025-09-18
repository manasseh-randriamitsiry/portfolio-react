import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* message */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-white/60 text-center mt-8"
        >
          <p>No client reviews available yet.</p>
          <p className="mt-4">Ready to start your project? <a href="mailto:manassehrandriamitsiry@gmail.com" className="text-accent hover:underline">Let's connect!</a></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
