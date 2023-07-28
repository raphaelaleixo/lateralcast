import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    className="h-full overflow-hidden"
    initial={{ x: 100, opacity: 0, delay: 0.1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
