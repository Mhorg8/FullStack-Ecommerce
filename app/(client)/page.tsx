import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/productGrid/ProductGrid";

export default function Home() {
  return (
    <div className="">
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}
