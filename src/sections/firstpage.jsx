export default function FirstPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-Dark px-20 py-5">
      <section className="flex h-full flex-col text-white justify-between py-10">
        <div className="w-2/3">
          <h1 className="text-7xl leading-tight font-montserrat">
            I HELPED <span className="text-Light">COMPANIES</span> GENERATE
          </h1>
        </div>
        <div className="flex flex-col w-full items-end py-10 font-montserrat">
          <h1 className="text-9xl">+ 7000000</h1>
          <h1 className="text-5xl text-Light">Monthly Website Visitors</h1>
        </div>
      </section>
    </div>
  );
}
