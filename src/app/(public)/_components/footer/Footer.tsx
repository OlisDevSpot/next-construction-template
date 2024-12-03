"use client";

import Logo from "@/components/Logo";
import { companyInfo } from "@/data/companyInfo";
import FooterLink from "./FooterLink";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 flex p-8 justify-between items-start">
      <div className="-mt-2 flex flex-col gap-2">
        <Logo />
        <p className="text-neutral-300 font-bold tracking-tighter">
          Your home is our canvas
        </p>
        <p>CA Lic. {companyInfo.caLicense}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <ul className="flex flex-col gap-4">
          <h3 className="text-neutral-200 font-bold">Get In Touch</h3>
          {companyInfo.contact.map((contact) => (
            <li
              key={contact.type}
              className="text-neutral-300 flex gap-2 items-center text-md"
            >
              <contact.icon size={20} />
              {contact.value}
            </li>
          ))}
          <li className="flex gap-2 items-center">
            {companyInfo.socials.map((social) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={social.type}
                href={social.href}
                className="flex items-center justify-center rounded-full bg-primary h-10 w-10"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-200 font-bold">Hours</h3>
          {companyInfo.hours.map((hour) => (
            <p key={hour.days} className="text-neutral-300">
              {hour.days}: {hour.open} - {hour.close}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-200 font-bold">Quick Links</h3>
          <ul className="text-neutral-400 flex flex-col gap-4">
            <FooterLink href="/" label="Home" />
            <FooterLink href="/about" label="About" />
            <FooterLink href="/projects" label="Projects" />
            <FooterLink href="/services" label="Services" />
          </ul>
        </div>
      </div>
    </footer>
  );
}
