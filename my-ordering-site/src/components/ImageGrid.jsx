//my-ordering-site/src/components/ImageGrid.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ImageGrid({ images }) {
  const sortedImages = [...images].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(null); // null = no modal open

  const [quantity, setQuantity] = useState(0);

  const closeModal = () => {
    setSelectedImage(null);
    setQuantity(0); // reset when closing
  };

  const increase = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrease = () => setQuantity((q) => Math.max(q - 1, 0));

  return (
    <>
      {/* Grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sortedImages.map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 bg-white rounded shadow hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-48 h-48 object-cover rounded"
            />
            <p className="mt-2 text-center">{img.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // click outside closes
        >
          <div
            className="bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <p className="mt-2 text-center">{selectedImage.name}</p>
            <p className="mt-2 text-gray-600 text-center">
              {selectedImage.description}
            </p>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center justify-center space-x-4">
              <button
                onClick={decrease}
                className="px-3 py-1 bg-gray-300 rounded text-lg font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={increase}
                className="px-3 py-1 bg-gray-300 rounded text-lg font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  addToCart(selectedImage, quantity);
                  closeModal();
                }}
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}