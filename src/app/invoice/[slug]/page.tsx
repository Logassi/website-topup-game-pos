import InvoicePageView from "@/views/pages/invoice-page";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  // const { slug } = await params;

  return (
    <div>
      <InvoicePageView slug={params.slug} />
    </div>
  );
}
