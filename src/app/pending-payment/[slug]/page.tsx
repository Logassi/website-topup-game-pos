import { PendingPaymentPageProps } from "@/types/pending-payment";
import PendingPaymentView from "@/views/pages/pending-payment-page";
import PendingPaymentViewSlug from "@/views/pages/pending-payment-page-slug";
import React from "react";

// interface PendingPaymentPageProps {
//   params: { slug: string };
// }

export default async function PendingPayment({
  params,
}: {
  params: PendingPaymentPageProps;
}) {
  const { slug } = await params;

  return (
    <div>
      <PendingPaymentViewSlug slug={slug} />
    </div>
  );
}
