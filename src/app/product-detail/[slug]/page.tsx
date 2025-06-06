import { ProductDetailPageProps } from "@/types/product-detail";
import ProductDetailPageViewSlug from "@/views/pages/product-detail-page-slug";
import React from "react";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return (
    <div>
      <ProductDetailPageViewSlug slug={slug} />
    </div>
  );
}
