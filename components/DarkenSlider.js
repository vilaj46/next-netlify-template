import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function DarkenSlider({ src, mainText, secondaryText }) {
  // const { src } = nightTimePorch;

  // Image
  // main text
  // slider text
  return (
    <div
      className="group flex justify-center mb-32 w-full 
                 h-min overflow-hidden h-40 text-center relative"
    >
      <Darken />
      <CenterMainText text={mainText} />
      <CenterSecondaryText text={secondaryText} />
      <img src={src} alt="Slider" className="w-full object-cover z-0" />
    </div>
  );
}

function Darken() {
  return (
    <div className="absolute z-10 w-full h-full bg-clear group-hover:bg-opacBlack"></div>
  );
}

function CenterMainText({ text }) {
  return (
    <div
      className="absolute z-20 transform transition top-1/2 
                 -translate-y-1/2 group-hover:-translate-x-thousand"
    >
      <div className="relative bg-superDarkRedOpac p-2">
        <p
          className="text-white z-30 group-hover:text-lightRed 
                      uppercase font-juni tracking-widest"
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function CenterSecondaryText({ text }) {
  return (
    <div
      className="absolute z-20 transition transform 
      top-1/2 -translate-y-1/2 translate-x-thousand group-hover:-translate-x-0"
    >
      <div className="relative z-30">
        <small className="text-white z-30 block font-juni pb-2 text-base">
          {text}
        </small>
        <Link
          className="text-superDarkRed block"
          href="https://uniongablesinnus.smartweb-04.bookassist.com/en/newsletter/"
        >
          <a
            className="text-superDarkRed p-2 border 
          hover:text-white font-juni hover:bg-darkRed hover:border-darkRed"
          >
            READ MORE
          </a>
        </Link>
      </div>
    </div>
  );
}
