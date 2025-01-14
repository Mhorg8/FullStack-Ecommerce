import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="max-w-6xl lg:px-8 py-12">
      <PageHeading text="about us" />

      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        explicabo, nam culpa ex, qui quam neque illo laboriosam sint dolores
        consequuntur eligendi, facere nesciunt illum adipisci doloribus in
        facilis expedita!
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam,
        magnam sapiente excepturi minus, fugit corrupti molestiae adipisci porro
        itaque alias vero sed nesciunt ut natus praesentium suscipit repellat,
        doloribus dolore. Veritatis, aut? Minima, sed optio. Harum vero
        consequatur cumque.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sint
        quasi sunt earum recusandae atque sapiente aut doloremque aperiam esse.
      </p>
    </Container>
  );
};

export default AboutPage;
