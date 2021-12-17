import "tailwindcss/tailwind.css";

function MainImage({ image }) {
  return (
    <div className="w-full h-full lg:h-192 bg-cover bg-center object-cover overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full bg-cover bg-center object-cover"
      />
    </div>
  );
}

export default MainImage;
