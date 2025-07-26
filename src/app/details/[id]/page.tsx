import { Fragment } from "react";

import * as C from "@/shared/components";

interface DetailsProps {
  params: Promise<{ id: string }>;
}

export default async function Details({ params }: DetailsProps) {
  const { id } = await params;

  return (
    <Fragment>
      <C.HeaderResult />
    </Fragment>
  );
}
