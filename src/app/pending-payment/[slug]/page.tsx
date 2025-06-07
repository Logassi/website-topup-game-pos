import { SlugProps } from "@/types/props";
import PendingPaymentViewSlug from "@/views/pages/pending-payment-page-slug";
import React from "react";

export default async function Page({ params }: { params: Promise<SlugProps> }) {
  const { slug } = await params;

  return (
    <div>
      <PendingPaymentViewSlug slug={slug} />
    </div>
  );
}
