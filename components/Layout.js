import { motion } from "framer-motion";

const Layout = ({ children }) => (
    <motion.div
      className="h-full overflow-hidden bg-white"
      initial={{ x: 600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -600, opacity: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
);
export default Layout;
