import AddToCardButton from "@/components/AddToCardButton";
import AddToFavorite from "@/components/whishlist/AddToFavorite";
import Container from "@/components/Container";
import PriceView from "@/components/PriceView";
import ImageView from "@/components/singleProduct/ImageView";
import ProductCharacteristics from "@/components/singleProduct/ProductCharacteristics";
import ProductDescription from "@/components/singleProduct/ProductDescription";
import ProductFeatures from "@/components/singleProduct/ProductFeatures";
import ProductStockView from "@/components/singleProduct/ProductStockView";
import { getProductBySlug } from "@/sanity/lib/helpers/query";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

const SingleProductPage = async ({ params }: Props) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  return (
    <Container className="py-10 flex flex-col md:flex-row gap-10">
      {product.images && <ImageView images={product.images} />}

      {/* right section */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {product.name}
          </h2>
          <PriceView
            price={product.price}
            discount={product.discount}
            className="text-lg font-bold"
          />
        </div>

        <ProductStockView stock={product.stock} />

        <ProductDescription
          description={product.description || "No description"}
        />

        <div className="flex items-start gap-2.5 lg:gap-5 w-full justify-between">
          <AddToCardButton
            product={product}
            className="bg-darkColor/80 text-white hover:bg-darkColor w-full hoverEffect"
          />

          <AddToFavorite product={product} />
        </div>

        <ProductCharacteristics product={product} />

        <ProductFeatures />
      </div>
    </Container>
  );
};

export default SingleProductPage;
