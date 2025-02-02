import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import FamilySelection from './steps/FamilySelection';
import AgeSelection from './steps/AgeSelection';
import CitySelection from './steps/CitySelection';
import MedicalHistory from './steps/MedicalHistory';
import Confirmation from './steps/Confirmation';

export type FamilyMember = {
  type: 'self' | 'wife' | 'son' | 'daughter' | 'father' | 'mother';
  age?: number;
};

export type FormData = {
  members: FamilyMember[];
  city: string;
  medicalConditions: string[];
  whatsappUpdates: boolean;
};

const InsuranceForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    members: [],
    city: '',
    medicalConditions: [],
    whatsappUpdates: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <FamilySelection formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 2:
        return <AgeSelection formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 3:
        return <CitySelection formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 4:
        return <MedicalHistory formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 5:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="form-container">
        {step > 1 && (
          <Button
            variant="ghost"
            className="mb-4"
            onClick={prevStep}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        {renderStep()}
      </div>
    </div>
  );
};

export default InsuranceForm;