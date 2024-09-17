export default function SecondPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-white px-20 py-5">
      <section className="grid grid-cols-12 gap-10 h-full text-Dark py-10 overflow-hidden">
        {/* Learn More Button */}
        <div className="col-span-2 flex items-center">
          <div className="border-2 border-Dark rounded-full aspect-square w-full flex justify-center items-center">
            <h1 className="text-center uppercase text-xl">Learn More</h1>
          </div>
        </div>
        {/* Image */}
        <div className="col-span-5">
          <img
            src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="CEO"
            className="object-center h-full w-full"
          />
        </div>
        {/* Text */}
        <div className="col-span-5">
          <div className="flex flex-col justify-between text-2xl font-semibold h-fit">
            <div>
              Helping brands tap into the future. Through strategy, creativity
              and innovation, together, we will define the new norm.
            </div>
            <div>
              Sleek layouts, typography, and smooth animations are what I love
              to create.
            </div>
            <div>
              As a creative developer, I create flexible & high-quality websites
              that engage with your audience and solve your biggest bottlenecks.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
