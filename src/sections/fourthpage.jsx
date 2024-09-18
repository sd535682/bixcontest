import BoxDetails from "../components/boxdetails";
import contractor from "../assets/animations/contractor.lottie";
import crm from "../assets/animations/crm.lottie";
import esg from "../assets/animations/esg.lottie";
import inventory from "../assets/animations/inventory.lottie";

export default function FourthPage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-white px-20 pt-24">
      <section className="flex size-full flex-col text-Dark justify-between pb-10">
        <h1 className="text-7xl leading-tight text-Dark font-montserrat">
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-4">
          <BoxDetails
            textColor="text-Dark"
            hovertextColor="hover:text-white"
            hoverbgColor="hover:bg-Dark"
            lottie={contractor}
            title="Subcontractor Management"
            description="The system streamlines subcontractor management, encompassing onboarding, contract administration, performance tracking, and automated payment processing."
          />
          <BoxDetails
            textColor="text-Dark"
            hovertextColor="hover:text-white"
            hoverbgColor="hover:bg-Dark"
            lottie={crm}
            title="Customer Relationship Management (CRM)"
            description="The system manages client relationships and sales processes through a centralized database, tracking leads, opportunities, and project histories, while automating client communications and follow-ups."
          />
          <BoxDetails
            textColor="text-Dark"
            hovertextColor="hover:text-white"
            hoverbgColor="hover:bg-Dark"
            lottie={esg}
            title="ESG Tracking"
            description="The system supports responsible construction practices by tracking ESG metrics, ensuring regulatory compliance, and promoting sustainable building methods through integrated tools for materials management and energy efficiency."
          />
          <BoxDetails
            textColor="text-Dark"
            hovertextColor="hover:text-white"
            hoverbgColor="hover:bg-Dark"
            lottie={inventory}
            title="Risk & Document Management"
            description="The system integrates safety management, risk assessment, and document control, ensuring secure and compliant project management."
          />
        </div>
      </section>
    </div>
  );
}
