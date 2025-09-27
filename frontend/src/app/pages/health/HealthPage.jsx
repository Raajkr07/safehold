import { useState } from "react";
import Header from "../../components/header/AppHeader";
import Footer from "../../../components/footer/AppFooter";
import KPISection from "./sections/KPI";
import ToggleSection from "./sections/Toggle";
import FinancialSection from "./sections/Financial";
import ExpenseSection from "./sections/Expense";
import CustomerSection from "./sections/Customer";
import OperationalSection from "./sections/Operational";
import StrategicSection from "./sections/Strategic";
import Improvements from './sections/Improvement';

export default function HealthPage() {
  const [visibleSections, setVisibleSections] = useState({
    financial: true,
    expense: false,
    customer: false,
    operational: false,
    strategic: false,
  });

  const toggleSection = (newState) => {
    setVisibleSections(newState);
  };

  return (
    <div className="min-h-screen my-14 flex flex-col">
      <Header />

      <div className="flex-1 p-6 grid gap-6">

        <KPISection />

        <ToggleSection
          visibleSections={visibleSections}
          toggleSection={toggleSection}
        />

        {visibleSections.financial && (
          <>
            <FinancialSection />
            <Improvements category="financial" />
          </>
        )}
        {visibleSections.expense && (
          <>
            <ExpenseSection />
            <Improvements category="expense" />
          </>
        )}
        {visibleSections.customer && (
          <>
            <CustomerSection />
            <Improvements category="customer" />
          </>
        )}
        {visibleSections.operational && (
          <>
            <OperationalSection />
            <Improvements category="operational" />
          </>
        )}
        {visibleSections.strategic && (
          <>
            <StrategicSection />
            <Improvements category="strategic" />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
