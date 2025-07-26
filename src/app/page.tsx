import { Fragment } from "react";
import { Star, ThumbsUp } from "lucide-react";

import * as C from "@/shared/components";
import { getTopPopular, getTopRecommended } from "@/shared/services";

export default async function Home() {
  const [popular, recommended] = await Promise.all([
    getTopPopular(),
    getTopRecommended(),
  ]);

  return (
    <Fragment>
      <C.Banner />

      <C.Title icon={<Star />} title="Mais Populares" />

      <C.TopPopular data={popular} />

      <C.Carousel />

      <C.Title icon={<ThumbsUp />} title="Mais Bem Classificados" />

      <C.TopPopular data={recommended} />

      <C.Footer />
    </Fragment>
  );
}
