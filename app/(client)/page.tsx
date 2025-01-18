import Banner from "@/components/Banner";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/productGrid/ProductGrid";
import Slider from "@/components/slider/Slider";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Home({}: Props) {
  return (
    <div className="">
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
      <Banner
        image="/banner.jpg"
        text="Discover Trendy Picks from Your Favorite Brands"
      />
      <Container>
        <Slider title="Newest Products" />
      </Container>
    </div>
  );
}
