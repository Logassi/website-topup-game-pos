import { SlugProps } from "@/types/props";
import ProductDetailPageViewSlug from "@/views/pages/product-detail-page-slug";
import React from "react";

export default async function Page({ params }: { params: Promise<SlugProps> }) {
  const { slug } = await params;

  return (
    <div>
      <ProductDetailPageViewSlug slug={slug} />
    </div>
  );
}
