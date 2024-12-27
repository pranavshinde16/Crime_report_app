"use client";
import { useState } from "react";
import { ReportForm } from "./ReportForm";

export default function ReportWizard() {
  const [curretStep, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleStepComplete = async (data: any) => {
    setReportData({ ...reportData, ...data });

    if (curretStep === 3) {
      return;
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      {curretStep === 1 && <ReportForm onComplete={handleStepComplete} />}
    </div>
  );
}
