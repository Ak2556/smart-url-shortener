"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      <motion.div
        key="toast"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-xl text-sm z-50"
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
}