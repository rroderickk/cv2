import React from "react";
import { motion } from 'framer-motion'


export const AnimateIntro =({ children })=> <>

  <motion.div style={{ display: 'inline-block' }}
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.9 }}
  >{children}</motion.div>

</>