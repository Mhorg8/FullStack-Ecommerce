import React from "react";
import Container from "./Container";
import FooterTop from "./footer/FooterTop";
import Logo from "./header/Logo";
import SocialMedia from "./sidebar/SocialMedia";
import NewsletterForm from "./footer/NewsletterForm";
import { categoriesData, quickLinksData } from "@/constants";
import FooterLinks from "./footer/FooterLinks";
import FooterHeading from "./footer/FooterHeading";

function Footer() {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterTop />
        {/* footer links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* div 1 */}
          <div className="space-y-4">
            <Logo text="Tulos" />
            <p className="text-gray-600 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
              aperiam odio quas officia optio, sit beatae excepturi vitae
              doloremque explicabo quibusdam mollitia
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:text-darkColor hover:border-darkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          {/* div 2 */}
          <div>
            <FooterLinks items={quickLinksData} heading="Quick Links" />
          </div>
          {/* div 3 */}
          <FooterLinks items={categoriesData} heading="Categories" />
          {/* div 4 */}
          <div>
            <FooterHeading text="Newsletter" />
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to receive updates exclusive offers .
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
