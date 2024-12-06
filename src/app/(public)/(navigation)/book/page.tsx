"use client";

import ContactForm from "../../_components/contact-form/ContactForm";
import { motion } from "motion/react";
import HeroContainer from "../../_components/HeroContainer";

export default function BookPage() {
  return (
    <HeroContainer>
      <div className="flex w-full h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.5)90%,rgba(0,0,0,1)100%),url('/images/get-in-touch.jpg')] bg-cover bg-no-repeat"
        />
        <ContactForm className="flex-1" />
      </div>
    </HeroContainer>
  );
}
