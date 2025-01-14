import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactPage = () => {
  return (
    <Container className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <PageHeading text="contact us" />
      <p>
        W&apos;d love to hear from you. Please fill out the form below and
        we&apos;ll get back to you ass soon as possible
      </p>

      <form action="" className="space-y-4 mt-6">
        <div className="space-y-0.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            name="name"
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            name="email"
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="message">Message</Label>
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
          ></textarea>
        </div>
        <button
          className="bg-darkColor/80 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-darkColor hoverEffect"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </Container>
  );
};

export default ContactPage;
