// src/components/Banner/index.tsx

import React from "react";
import { BannerContainer, BannerImage, BannerTitle } from "./styles";
import Tag from "../Tag";

type Props = {
  image: string;
  alt: string;
};

const Banner = ({ image, alt }: Props) => (
  <BannerContainer>
    <BannerImage src={image} alt={alt} />
    <BannerTitle>Produtos para Cães</BannerTitle>
    <Tag>Promoções</Tag>
  </BannerContainer>
);

export default Banner;
