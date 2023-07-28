import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <div className="h-full overflow-hidden bg-slate-700 rounded-2xl shadow-inner border-white border-2">
    <motion.div
      className="h-full overflow-hidden bg-white"
      initial={{ x: 600, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -600, opacity: 1 }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  </div>
);
export default Layout;
