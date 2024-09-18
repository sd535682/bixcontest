import BoxDetails from "../components/boxdetails";
import project from "../assets/animations/project.lottie";
import aianalytics from "../assets/animations/aianime.lottie";
import finance from "../assets/animations/finance.lottie";
import inventory from "../assets/animations/inventory.lottie";

export default function ThirdPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-Dark px-20 pt-24">
      <section className="flex size-full flex-col justify-between pb-10">
        <h1 className="text-7xl leading-tight text-white font-montserrat">
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-4">
          <BoxDetails
            textColor="text-white"
            hovertextColor="hover:text-Dark"
            hoverbgColor="hover:bg-white"
            lottie={project}
            title="Project Management Module"
            description="Manage projects efficiently with integrated tools for Gantt charts, real-time tracking, resource allocation, and team collaboration."
          />
          <BoxDetails
            textColor="text-white"
            hovertextColor="hover:text-Dark"
            hoverbgColor="hover:bg-white"
            lottie={aianalytics}
            title="AI-Driven Analytics and Reporting"
            description="Make data-driven decisions with predictive analytics, real-time reporting, and intuitive data visualization tools."
          />
          <BoxDetails
            textColor="text-white"
            hovertextColor="hover:text-Dark"
            hoverbgColor="hover:bg-white"
            lottie={finance}
            title="Financial Management"
            description="Ensure financial stability with integrated budgeting, invoicing, and cash flow management capabilities."
          />
          <BoxDetails
            textColor="text-white"
            hovertextColor="hover:text-Dark"
            hoverbgColor="hover:bg-white"
            lottie={inventory}
            title="Supply Chain and Inventory Management"
            description="Automate inventory reordering with AI-driven insights based on project needs and usage patterns."
          />
        </div>
      </section>
    </div>
  );
}
