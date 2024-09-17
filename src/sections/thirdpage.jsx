import BoxDetails from "../components/boxdetails";

export default function ThirdPage() {
  return (
    <div className="flex flex-col w-screen bg-Dark px-20 py-5">
      <section className="flex size-full flex-col text-white justify-between py-10">
        <h1 className="text-7xl leading-tight text-white">SOUND FAMILIAR?</h1>
        <div className="grid grid-cols-4">
          <BoxDetails
            title="Hello"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
          <BoxDetails
            title="Hello"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
          <BoxDetails
            title="Hello"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
          <BoxDetails
            title="Hello"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
        </div>
      </section>
    </div>
  );
}
