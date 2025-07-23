import React from "react";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/three-dogs-banner.png";
import ProductCard from "../../components/Products";
import ImgProduro from "../../assets/images/petmarket.png";

export default function Produtos() {
  return (
    <>
      <Banner image={bannerImage} alt="3 cachorros" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
        <ProductCard
          image={ImgProduro}
          title="Outro Produto"
          description="Outra descrição"
        />
      </div>
    </>
  );
}
