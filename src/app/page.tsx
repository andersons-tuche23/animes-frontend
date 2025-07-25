import { Fragment } from "react";
import { Star } from "lucide-react";

import { getTopPopular } from "@/shared/services";
import { Banner, Title, TopPopular } from "@/shared/components";

export default async function Home() {
  const popular = await getTopPopular();

  return (
    <>
      <Banner />

      <Title icon={<Star />} title="Mais Populares" />

      <TopPopular data={popular} />
    </>
  );
}
