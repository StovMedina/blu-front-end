import React from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import { nanoid } from "nanoid";

const LandingPage = () => {
  const data = require("../../MOCK_DATA (1).json");

  // const products = [
  //   {
  //     image:
  //       "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Chamarra de mezclilla con bordado",
  //     text: "Chamarra con un lindo bordado motivador",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Hoodie para correr",
  //     text: "Hoodie ligera ideal para trotar",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/3236651/pexels-photo-3236651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Pareo ligero",
  //     text: "Pareo ligero con estampado",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/1024036/pexels-photo-1024036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Vestido vaporoso de primavera",
  //     text: "Vestido con estampado floral",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Chamarra de mezclilla con bordado",
  //     text: "Chamarra con un lindo bordado motivador",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Hoodie para correr",
  //     text: "Hoodie ligera ideal para trotar",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/3236651/pexels-photo-3236651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Pareo ligero",
  //     text: "Pareo ligero con estampado",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/1024036/pexels-photo-1024036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Vestido vaporoso de primavera",
  //     text: "Vestido con estampado floral",
  //   },
  // ];

  return (
    <div className="landing-container">
      <main className="landing-main__container">
        {data.map((data, index) => (
          <BluCard
            id={nanoid()}
            key={index}
            variant="top"
            src={data.image}
            cardTitle={data.name}
            cardText={data.description}
          ></BluCard>
        ))}
      </main>
      <aside></aside>
    </div>
  );
};

export default LandingPage;
