import { InvoiceProps } from "@/types/invoice";
import InvoicePageView from "@/views/pages/invoice-page";
import React from "react";

export default async function Invoice({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return (
    <div>
      <InvoicePageView slug={slug} />
    </div>
  );
}
