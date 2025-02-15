"use client";
import { motion } from "motion/react";

export default function SectionLayout({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className=" box-border pt-16 lg:pt-28  w-full">
      <motion.div
        initial={{ opacity: 0, top: 40 }}
        whileInView={{ opacity: 1, top: 0 }}
        viewport={{ once: true }}
        className=""
      >
        {children}
      </motion.div>
    </section>
  );
}
