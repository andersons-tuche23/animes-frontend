import Image from "next/image";
import { Fragment } from "react";

import * as C from "@/shared/components";
import { getAnimeById } from "@/shared/services";

import * as S from "./styles";

interface DetailsProps {
  params: Promise<{ id: string }>;
}

export default async function Details({ params }: DetailsProps) {
  const { id } = await params;
  const response = await getAnimeById(id);

  return (
    <Fragment>
      <S.WrapperHeader>
        <Image src={response?.attributes.coverImage.tiny} fill alt="Cover" />

        <C.HeaderResult />
      </S.WrapperHeader>

      <S.Container>
        <C.SidebarDetail item={response} />

        <S.Body>
          <h1>{response.attributes.canonicalTitle}</h1>
          <p>{response.attributes.description}</p>
        </S.Body>
      </S.Container>
    </Fragment>
  );
}
