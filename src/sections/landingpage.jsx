import backgroundImage from "../assets/background.webp";

export default function LandingPage() {
  return (
    <div className={`flex flex-col h-screen px-20 py-5 relative`}>
      <div
        className={`absolute top-0 left-0 w-full h-full`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "brightness(0.5)",
        }}
      />
      <div className="z-10">
        {/* <Header logoColor="white" buttonColor="bg-white" /> */}
        <div className="flex flex-col gap-10 h-screen text-white justify-center">
          <h1 className="text-9xl font-bold">
            BIXCON <span className="text-Light">AI</span>
          </h1>
          <h1 className="text-3xl">
            The Future of Construction Management is Coming
          </h1>
        </div>
      </div>
    </div>
  );
}
