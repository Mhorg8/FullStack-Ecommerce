import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import React from "react";

const TermsPage = () => {
  return (
    <Container className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <PageHeading text="terms and conditions" />

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nemo
            explicabo natus reiciendis commodi!
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nemo
            explicabo natus reiciendis commodi dolor sit amet c!
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Limitation of Liability
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nemo
            explicabo natus reiciendis commodi!
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Governing Law</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nemo
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Use of Services</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nemo
            explicabo natus reiciendis commodi dolor sit amet c!
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsPage;
