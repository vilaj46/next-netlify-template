import "tailwindcss/tailwind.css";

function MainImage({ image }) {
  return (
    <div className="w-full h-full xl:h-192 overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        // Can probably clean this css up a bit.
        className="w-full bg-cover bg-center object-cover"
      />
    </div>
  );
}

export default MainImage;
