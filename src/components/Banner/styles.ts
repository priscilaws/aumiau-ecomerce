import styled from "styled-components";
import { colors } from "../../styles";

export const BannerContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: block;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
`;

export const BannerTitle = styled.h2`
  font-size: 24px;
  font-weigth: bold;
  color: ${colors.navy};
`;
