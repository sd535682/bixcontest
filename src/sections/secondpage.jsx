export default function SecondPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-white px-20 pt-24">
      <section className="grid grid-cols-12 gap-10 h-full text-Dark pb-5 overflow-hidden">
        {/* Learn More Button */}
        <div className="col-span-2 flex items-center">
          <div
            className="border-2 border-Dark rounded-full aspect-square w-full flex justify-center items-center"
            id="#learnmore"
          >
            <h1 className="text-center uppercase text-xl">Learn More</h1>
          </div>
        </div>
        {/* Image */}
        <div className="col-span-5">
          <img
            src="https://images.unsplash.com/photo-1574757987642-5755f0839101?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="CEO"
            className="object-center h-fit"
          />
        </div>
        {/* Text */}
        <div className="col-span-5 ">
          <div className="flex flex-col justify-between text-xl font-regular font-roboto max-h-full">
            <div>
              At BixconAI, we are focused on building cutting-edge technology
              solutions for the construction industry, providing AI-driven
              Enterprise Resource Planning (ERP) software tailored specifically
              to the needs of construction firms. Our flagship product
              streamlines project management, resource allocation, supply chain
              management, risk management, and other key functions. By
              leveraging predictive analytics and automation, we help companies
              improve productivity, cut costs, and enhance operational
              efficiency across large and complex construction projects.
            </div>
            <div className="pt-5">
              We are a forward-thinking organization, committed to fostering
              innovation and creating technology that delivers measurable
              results. With a focus on data-driven decision-making, our ERP
              solution helps construction firms stay ahead of the curve by
              optimizing processes and improving collaboration. Our goal is to
              help companies achieve operational excellence while embracing
              sustainability and compliance in the construction industry.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
