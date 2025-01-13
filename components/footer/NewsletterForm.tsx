import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewsletterForm = () => {
  return (
    <form className="space-y-3">
      <Input
        type="email"
        placeholder="Enter your email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
      />

      <Button
        type="submit"
        className="w-full bg-darkColor text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
