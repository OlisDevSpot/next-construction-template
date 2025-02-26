"use client";

import Logo from "@/components/Logo";
import { COMPANY_INFO } from "@/data/companyInfo";
import FooterLink from "./FooterLink";

import { motion } from "motion/react";
import Map from "./Map";
import { FooterGroup } from "./FooterGroup";

const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/book", label: "Book Online" },
  { href: "/privacy-policty", label: "Privacy Policy" },
];

const footerServicesLinks = [
  {
    href: "/",
    label: "Solar",
  },
  {
    href: "/",
    label: "HVAC",
  },
  {
    href: "/",
    label: "Roofing",
  },
  {
    href: "/",
    label: "New construction",
  },
  {
    href: "/",
    label: "Gutters",
  },
  {
    href: "/",
    label: "Kitchens",
  },
];

export default function Footer() {
  const { caLicense, hours, contact, socials } = COMPANY_INFO;
  return (
    <footer className="bg-neutral-800">
      <div className="flex flex-col gap-8 p-8 max-w-[1280px] mx-auto">
        <div className="w-full flex gap-16 justify-between">
          <div className="flex flex-col gap-2 h-auto">
            <Logo />
            <p className="text-neutral-300 font-bold tracking-tighter">
              Your home is our canvas
            </p>
            <p>CA Lic. {caLicense}</p>
            <div className="flex gap-2 items-center mt-4">
              {socials.map((social) => (
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
            </div>
          </div>
          <Map
            address={COMPANY_INFO.address}
            zoom={12}
            className="w-full h-auto rounded-lg overflow-hidden"
          />
        </div>
        <div className="grid h-full w-full gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <FooterGroup
              title="Get In Touch"
              className="col-span-2 sm:col-span-1"
            >
              <ul>
                {contact.map((contact) => (
                  <li
                    key={contact.type}
                    className="text-neutral-300 flex gap-2 items-center text-md"
                  >
                    <contact.icon size={16} />
                    {contact.value}
                  </li>
                ))}
              </ul>
            </FooterGroup>
            <FooterGroup title="Hours" className="col-span-2 sm:col-span-1">
              {hours.map((hour) => (
                <p key={hour.days} className="text-neutral-300">
                  {hour.days}: {hour.open} - {hour.close}
                </p>
              ))}
            </FooterGroup>
            <FooterGroup title="Quick Links">
              <ul className="text-neutral-400 flex flex-col">
                {footerQuickLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </ul>
            </FooterGroup>
            <FooterGroup title="Services">
              <ul className="text-neutral-400 flex flex-col">
                {footerServicesLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </ul>
            </FooterGroup>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-sm text-neutral-400 text-center">
          <p className="font-bold">
            All Installations completed by a Licensed Contractor - MODCON
            DEVELOPERS, LLC | California #1027027
          </p>
          <p>
            Actual savings will vary depending on system production, geography,
            weather, shade, electricity usage, utility rates, rate increases,
            and financing options. Savings estimated here assumes utility rate
            increases annually and stable customer utility usage rates. Contact
            us to receive a detailed proposal based on your home and energy
            usage.
          </p>
          <p className="mt-4">
            © ModCon Builders Inc 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
