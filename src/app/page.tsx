import { Fragment } from "react";
import { Star, ThumbsUp } from "lucide-react";

import * as C from "@/shared/components";
import { getTopPopular, getTopRecommended } from "@/shared/services";
import { Wrapper } from "@/shared/styles";

export default async function Home() {
  const [popular, recommended] = await Promise.all([
    getTopPopular(),
    getTopRecommended(),
  ]);

  return (
    <Fragment>
      <C.Banner />

      <Wrapper>
        <C.Title icon={<Star />} title="Mais Populares" />

        <C.ListAnimes data={popular} />

        <C.Carousel />

        <C.Title icon={<ThumbsUp />} title="Mais Bem Classificados" />

        <C.ListAnimes data={recommended} />
      </Wrapper>
    </Fragment>
  );
}
