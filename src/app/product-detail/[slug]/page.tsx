import ProductDetailPageViewSlug from "@/views/pages/product-detail-page-slug";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductDetail({ params }: Props) {
  const { slug } = params;

  return (
    <div>
      <ProductDetailPageViewSlug slug={slug} />
    </div>
  );
}
