import ProductDetailPageView from "@/views/pages/product-detail-page";
import ProductDetailPageViewSlug from "@/views/pages/product-detail-page-slug";
import React from "react";

interface ProductDetailPageProps {
  params: { slug: string };
}

export default function ProductDetail({ params }: ProductDetailPageProps) {
  const { slug } = params;

  return (
    <div>
      <ProductDetailPageViewSlug slug={slug} />
    </div>
  );
}
