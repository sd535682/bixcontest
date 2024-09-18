import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function BoxDetails({
  title,
  description,
  lottie,
  textColor,
  hovertextColor,
  hoverbgColor,
}) {
  return (
    <div
      className={`flex flex-col pt-5 ${hoverbgColor} ${textColor} ${hovertextColor} transition-all duration-700 ease-in-out`}
    >
      <div className="flex justify-center items-center">
        <DotLottieReact
          src={lottie}
          loop
          autoplay
          style={{
            height: 200,
            width: 200,
          }}
          renderer="canvas"
        />
      </div>
      <div className="flex flex-col p-4 font-roboto">
        <h1 className="text-2xl font-semibold text-Light">{title}</h1>
        <p className="text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
}
