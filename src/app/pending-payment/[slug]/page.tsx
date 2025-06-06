import { PendingPaymentPageProps } from "@/types/pending-payment";
import PendingPaymentView from "@/views/pages/pending-payment-page";
import PendingPaymentViewSlug from "@/views/pages/pending-payment-page-slug";
import React from "react";

export default function PendingPayment({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div>
      <PendingPaymentViewSlug slug={slug} />
    </div>
  );
}
