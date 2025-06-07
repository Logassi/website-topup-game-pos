import { SlugProps } from "@/types/props";
import InvoicePageView from "@/views/pages/invoice-page";
import React from "react";

// type Props = {
//   params: {
//     slug: string;
//   };
// };

export default async function Page({ params }: { params: Promise<SlugProps> }) {
  const { slug } = await params;

  return (
    <div>
      <InvoicePageView slug={slug} />
    </div>
  );
}
