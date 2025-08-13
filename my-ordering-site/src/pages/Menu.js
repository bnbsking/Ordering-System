// /app/my-ordering-site/src/pages/Menu.js
import ImageGrid from "../components/ImageGrid";
import basqueImg from "../assets/images/merchandise/basque_1.jpg";
import canelesImg from "../assets/images/merchandise/caneles_1.jpg";
import moonCakeImg from "../assets/images/merchandise/moon_cake_1.jpg";

const images = [
  { name: "basque", src: basqueImg },
  { name: "caneles", src: canelesImg },
  { name: "moon_cake", src: moonCakeImg },
];

export default function Menu() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Dessert Gallery</h1>
      <ImageGrid images={images} />
    </div>
  );
}
