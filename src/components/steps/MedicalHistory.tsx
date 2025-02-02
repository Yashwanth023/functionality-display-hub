import React from 'react';
import { Button } from "@/components/ui/button";
import { FormData } from '../InsuranceForm';
import { Switch } from "@/components/ui/switch";
import { AlertCircle } from 'lucide-react';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
};

const MEDICAL_CONDITIONS = [
  'Diabetes',
  'Blood Pressure',
  'Heart Disease',
  'Any Surgery',
  'Thyroid',
  'Asthma',
  'Other Disease',
  'None of These'
];

const MedicalHistory = ({ formData, updateFormData, onNext }: Props) => {
  const toggleCondition = (condition: string) => {
    let updatedConditions: string[];
    
    if (condition === 'None of These') {
      updatedConditions = formData.medicalConditions.includes(condition) ? [] : [condition];
    } else {
      updatedConditions = formData.medicalConditions.includes(condition)
        ? formData.medicalConditions.filter(c => c !== condition)
        : [...formData.medicalConditions.filter(c => c !== 'None of These'), condition];
    }
    
    updateFormData({ medicalConditions: updatedConditions });
  };

  return (
    <div>
      <h2 className="step-heading">Medical History</h2>
      <p className="text-center mb-6 text-gray-600">
        Do any member(s) have any existing illnesses for which they take regular medication?
      </p>
      <div className="medical-grid">
        {MEDICAL_CONDITIONS.map(condition => (
          <div
            key={condition}
            className={`medical-option ${
              formData.medicalConditions.includes(condition) ? 'bg-blue-50' : ''
            }`}
            onClick={() => toggleCondition(condition)}
          >
            <input
              type="checkbox"
              checked={formData.medicalConditions.includes(condition)}
              onChange={() => {}}
              className="mr-3"
            />
            {condition}
          </div>
        ))}
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-2 mb-6">
        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
        <p className="text-sm text-yellow-800">
          We will find you plans that cover your condition
        </p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span>Get Updates on WhatsApp</span>
        <Switch
          checked={formData.whatsappUpdates}
          onCheckedChange={(checked) => updateFormData({ whatsappUpdates: checked })}
        />
      </div>
      <Button 
        className="w-full"
        onClick={onNext}
        disabled={formData.medicalConditions.length === 0}
      >
        Continue
      </Button>
    </div>
  );
};

export default MedicalHistory;