import backgroundImage from "../assets/background.jpg";
import BodyText from "../components/bodyText";
import Button from "../components/button";
import Header from "../components/header";

export default function Headline() {
  return (
    <div className="flex flex-col justify-center gap-20 w-screen h-screen object-cover pl-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.5)",
        }}
      />
      <Header text="About Us" textColor="text-white" />
      <div className="flex flex-col gap-6 relative z-10">
        <BodyText
          text="The Future of Construction Management is Coming"
          color="text-white"
        />
        <Button
          text="About Project"
          textColor="text-white"
          bgColor="bg-transparent"
          hoverColor="hover:bg-orange-600"
        />
      </div>
      <h1 className="text-9xl font-bold text-white relative z-10">
        The
        <br />
        Bixcon AI
      </h1>
    </div>
  );
}
