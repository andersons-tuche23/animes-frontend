import { Fragment } from "react";
import { Film } from "lucide-react";

import * as C from "@/shared/components";
import { getAllAnimes } from "@/shared/services";
import { Wrapper } from "@/shared/styles";

type ResultProps = {
  searchParams: { offset?: string; view?: string };
};

export default async function Result({ searchParams }: ResultProps) {
  const { view, offset } = await searchParams;

  const response = await getAllAnimes(view, offset);
  const title = view ? decodeURIComponent(view) : "Todos os Animes";

  return (
    <Fragment>
      <C.HeaderResult isBackgroundBlack />

      <Wrapper>
        <C.Title icon={<Film />} defaultTitle={title} />

        <C.ListAnimes data={response.data} />

        <C.Navigation links={response.links} />
      </Wrapper>
    </Fragment>
  );
}
