"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({ className }: { className?: string }) {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={cn("flex flex-col items-center justify-center p-8", className)}
    >
      <p className="text-neutral-400">Your new home awaits,</p>
      <h2 className="font-bold text-3xl">Get In Touch</h2>
      <Separator className="min-w-6 max-w-20 bg-input-muted mt-4 mb-8" />
      <form
        onSubmit={submitForm}
        autoComplete="off"
        className="grid grid-cols-2 gap-4 w-full max-w-lg"
      >
        <div className="relative col-span-2">
          <Label
            htmlFor="name"
            className="absolute block -top-2 ml-3 z-10 bg-black px-1 py-0 text-neutral-500 text-xs"
          >
            Full name
          </Label>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="relative col-span-2 md:col-span-1">
          <Label
            htmlFor="phone"
            className="absolute block -top-2 ml-3 z-10 bg-black px-1 py-0 text-neutral-500 text-xs"
          >
            Phone Number
          </Label>
          <Input type="text" name="phone" id="phone" />
        </div>
        <div className="relative col-span-2 md:col-span-1">
          <Label
            htmlFor="email"
            className="absolute block -top-2 ml-3 z-10 bg-black px-1 py-0 text-neutral-500 text-xs"
          >
            Email
          </Label>
          <Input type="text" name="email" id="email" />
        </div>
        <div className="relative col-span-2">
          <Label
            htmlFor="message"
            className="absolute block -top-2 ml-3 z-10 bg-black px-1 py-0 text-neutral-500 text-xs"
          >
            What you&apos;re looking for
          </Label>
          <Textarea rows={5} name="message" id="message" />
        </div>
        <Button className="col-span-2" type="submit">
          Get A Quote
        </Button>
      </form>
    </motion.div>
  );
}
