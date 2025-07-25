import { Fragment } from "react";
import { Star, ThumbsUp } from "lucide-react";

import { getTopPopular, getTopRecommended } from "@/shared/services";
import {
  Banner,
  Carousel,
  Footer,
  Title,
  TopPopular,
} from "@/shared/components";

export default async function Home() {
  const [popular, recommended] = await Promise.all([
    getTopPopular(),
    getTopRecommended(),
  ]);

  return (
    <Fragment>
      <Banner />

      <Title icon={<Star />} title="Mais Populares" />

      <TopPopular data={popular} />

      <Carousel />

      <Title icon={<ThumbsUp />} title="Mais Bem Classificados" />

      <TopPopular data={recommended} />

      <Footer />
    </Fragment>
  );
}
