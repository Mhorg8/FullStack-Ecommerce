import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/productGrid/ProductGrid";
import Slider from "@/components/slider/Slider";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Home({ params }: Props) {
  return (
    <div className="">
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
        <Slider title="slider" />
      </Container>
    </div>
  );
}
