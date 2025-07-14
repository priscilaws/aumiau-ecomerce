import Button from "../Button";
import Tag from "../Tag";
import { Caption, Card, Title, CardImage, Infos } from "./styles";

type Props = {
  title: string;
  category: string;
  caption: string;
  rating: number;
  image: string;
  infos?: string[];
};

export const Product = ({
  title,
  category,
  caption,
  rating,
  image,
  infos = [],
}: Props) => (
  <Card>
    <CardImage src={image} alt="dog on yellow background" />
    <Infos>
      {infos.map((info) => (
        <Tag color="aqua">{info}</Tag>
      ))}
    </Infos>
    <Title>
      {" "}
      {title}
      <span>{rating}</span>
    </Title>
    <Tag>{category}</Tag>
    <Caption>{caption}</Caption>
    <Button type="button">Saiba mais...</Button>
  </Card>
);
