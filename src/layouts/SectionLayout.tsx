"use client";
import { motion } from "motion/react";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, top: 40 }}
        whileInView={{ opacity: 1, top: 0 }}
        viewport={{ once: true }}
        className="pt-28"
      >
        {children}
      </motion.div>
    </section>
  );
}
