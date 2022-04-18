import { AnimatePresence, motion } from 'framer-motion'

import React from "react";

const AnimateIntro =({children})=> { return (<>

  <motion.div
    style={{ display: 'inline-block' }}
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.9 }}
  >{children}</motion.div>

</> ) }; export {AnimateIntro};