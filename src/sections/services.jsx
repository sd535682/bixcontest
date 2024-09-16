import Header from "../components/header";
import ServicesBox from "../components/servicesbox";
import StaticButton from "../components/staticButton";
import BodyText from "../components/bodytext";

export default function Services() {
  return (
    <div className="bg-white flex flex-col justify-center gap-20 w-screen h-screen object-cover pl-40">
      <Header text="Our Services" textColor="text-black" />
      <div className="flex flex-row gap-6 h-2/4 pr-40">
        {/* Box 1 */}
        <ServicesBox
          title="Financial Management"
          subtitle="Cash Flow Management"
          width="w-3/5"
        >
          <StaticButton
            text="Budget"
            textColor="text-black"
            borderColor="border-black"
          />
          <StaticButton
            text="Cost Control"
            textColor="text-white"
            bgColor="bg-black"
          />
          <StaticButton
            text="Payments"
            textColor="text-white"
            bgColor="bg-orange-600"
          />
          <StaticButton
            text="Invoicing"
            textColor="text-black"
            borderColor="border-black"
          />
          <StaticButton
            text="Cash Flow Management"
            textColor="text-white"
            bgColor="bg-orange-600"
          />
        </ServicesBox>
        {/* Box 2 */}
        <ServicesBox
          title="Supply Chain Management"
          subtitle="Automated Reordering"
          width="w-2/5"
        >
          <StaticButton
            text="Budget"
            textColor="text-white"
            bgColor="bg-orange-600"
          />
          <StaticButton
            text="Cost Control"
            textColor="text-white"
            bgColor="bg-black"
          />
          <StaticButton
            text="Payments"
            textColor="text-black"
            borderColor="border-black"
          />
        </ServicesBox>
      </div>
      <div>
        <BodyText
          text="We provide best solution for your dream, still adapt your budget"
          color="text-black"
        />
        <BodyText
          text="and match with requires about quality of project "
          color="text-black"
        />
      </div>
    </div>
  );
}
