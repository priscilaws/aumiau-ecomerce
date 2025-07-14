import { Product } from "../Product";
import { Container, List } from "./styles";
import image from "../../assets/images/orange-dog.jpg";

type Props = {
  title: string;
  background: "gray" | "black";
};

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="Container">
      <h2>{title}</h2>
      <List>
        <Product
          infos={["Novidades", "Promoções"]}
          image={image}
          category="Cães"
          title="Nossa linha de alimentos caninos"
          rating={4.9}
          caption="Deliciosas refeições naturais e nutritivas, especialmente preparadas para o bem-estar do seu cão."
        />
        <Product
          infos={["Novidades", "Promoções"]}
          image={image}
          category="Felinos"
          title="Nossa linha de alimentos caninos"
          rating={4.9}
          caption="Deliciosas refeições naturais e nutritivas, especialmente preparadas para o bem-estar do seu cão."
        />
        <Product
          infos={["Promoções"]}
          image={image}
          category="Cães"
          title="Nossa linha de alimentos caninos"
          rating={4.9}
          caption="Deliciosas refeições naturais e nutritivas, especialmente preparadas para o bem-estar do seu cão."
        />
        <Product
          infos={["Novidades"]}
          image={image}
          category="Cães"
          title="Nossa linha de alimentos caninos"
          rating={4.9}
          caption="Deliciosas refeições naturais e nutritivas, especialmente preparadas para o bem-estar do seu cão."
        />
        <Product
          infos={["Promoções"]}
          image={image}
          category="Cães"
          title="Nossa linha de alimentos caninos"
          rating={4.9}
          caption="Deliciosas refeições naturais e nutritivas, especialmente preparadas para o bem-estar do seu cão."
        />
        <Product
          infos={["Novidades", "Promoções"]}
          image={image}
          category="Cães"
          title="Nossa linha de alimentos caninos"
          rating={4.9}
          caption="Deliciosas refeições naturais e nutritivas, especialmente preparadas para o bem-estar do seu cão."
        />
      </List>
    </div>
  </Container>
);

export default ProductsList;
