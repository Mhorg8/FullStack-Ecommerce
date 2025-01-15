import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getAllCategories } from "@/sanity/lib/helpers/query";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: Props) => {
  const { slug } = await params;
  const categories = await getAllCategories();

  return (
    <Container className="py-12">
      <Title className="text-xl ">
        Products by Category{" "}
        <span className="font-bold text-green-600 tracking-wide capitalize">
          {slug && slug}
        </span>
      </Title>
      <CategoryProducts categories={categories} slug={slug} />
    </Container>
  );
};

export default CategoryPage;
