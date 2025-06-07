import InvoicePageView from "@/views/pages/invoice-page";
import React from "react";

type Props = {
  slug: string;
};

export default async function Page({ params }: { params: Promise<Props> }) {
  const { slug } = await params;

  return (
    <div>
      <InvoicePageView slug={slug} />
    </div>
  );
}
