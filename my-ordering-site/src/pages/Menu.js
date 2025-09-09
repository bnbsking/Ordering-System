// /app/my-ordering-site/src/pages/Menu.js
import ImageGrid from "../components/ImageGrid";
import basqueImg from "../assets/images/merchandise/basque_1.jpg";
import canelesImg from "../assets/images/merchandise/caneles_1.jpg";
import moonCakeImg from "../assets/images/merchandise/moon_cake_1.jpg";

const images = [
  { name: "basque", src: basqueImg, description: "A delicious Basque cheesecake." },
  { name: "caneles", src: canelesImg, description: "A sweet pastry from Bordeaux." },
  { name: "moon_cake", src: moonCakeImg, description: "A traditional Chinese pastry." },
  { name: "z1", src: basqueImg, description: "A delicious Basque cheesecake." },
  { name: "z2", src: basqueImg, description: "A delicious Basque cheesecake." },
  { name: "z3", src: basqueImg, description: "A delicious Basque cheesecake." },
  { name: "z4", src: basqueImg },
  { name: "z5", src: basqueImg },
  { name: "z6", src: basqueImg },
];

export default function Menu() {
  return (
    <div className="pt-20">
      <h1 className="text-2xl font-bold p-4">Dessert Gallery</h1>
      <div className="mx-auto max-w-5xl px-4"> {/* limits left & right padding */}
        <ImageGrid images={images} />
      </div>
    </div>
  );
}
