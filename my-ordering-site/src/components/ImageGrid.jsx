export default function ImageGrid({ images }) {
  const sortedImages = [...images].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {sortedImages.map((img, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={img.src}
            alt={img.name}
            className="w-48 h-48 object-cover rounded shadow"
          />
          <p className="mt-2 text-center">{img.name}</p>
        </div>
      ))}
    </div>
  );
}
