import Typewriter from "typewriter-effect";

export default function FirstPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-Dark px-20 pt-32">
      <section className="flex h-full flex-col text-white justify-between">
        <div className="w-2/3">
          <h1 className="text-7xl leading-tight font-montserrat">
            GLOBAL STANDARD
            <span className="text-Light"> ERP BUDGET</span> WAS
          </h1>
        </div>
        <div className="flex flex-col w-full items-end py-10 font-montserrat">
          <h1 className="text-9xl leading-tight">
            <Typewriter
              options={{
                strings: ["$9,000", "Rs. 7,53,533"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </h1>
          <h1 className="text-5xl text-Light leading-tight">
            PER USER IN 2022
          </h1>
        </div>
      </section>
    </div>
  );
}
