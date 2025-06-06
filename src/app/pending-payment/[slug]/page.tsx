import PendingPaymentViewSlug from "@/views/pages/pending-payment-page-slug";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <div>
      <PendingPaymentViewSlug slug={slug} />
    </div>
  );
}
