import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import React from "react";

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <PageHeading text="Privacy Policy" />

      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold mb-3">
            1. Information collection
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-3">2. Use of Information</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-3">3. Information Sharing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-3">4. Data Security</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPage;
