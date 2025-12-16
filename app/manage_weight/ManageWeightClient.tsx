'use client';
import { useState } from "react";
import DietaryNeeds from "@/components/macro-calculator/dietary-needs/DietaryNeeds";
import DesiredWeight from "@/components/macro-calculator/desired-weight/DesiredWeight";
import MacroSummary from "@/components/macro-calculator/macro-summary/MacroSummary";

const ManageWeightClient = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <DietaryNeeds onSave={() => setStep(2)} />}
      {step === 2 && <DesiredWeight onSave={() => setStep(3)} />}
      {step === 3 && <MacroSummary />}
    </div>
  );
};

export default ManageWeightClient;
