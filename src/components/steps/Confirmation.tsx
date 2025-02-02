import React from 'react';
import { Button } from "@/components/ui/button";
import { FormData } from '../InsuranceForm';
import { CheckCircle2 } from 'lucide-react';

type Props = {
  formData: FormData;
};

const Confirmation = ({ formData }: Props) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
      </div>
      <h2 className="step-heading">Thank you for your submission!</h2>
      <div className="text-left space-y-4 mb-6">
        <h3 className="font-semibold">Summary of your details:</h3>
        <div>
          <p className="font-medium">Family Members:</p>
          <ul className="list-disc list-inside">
            {formData.members.map(member => (
              <li key={member.type}>
                {member.type.charAt(0).toUpperCase() + member.type.slice(1)} - {member.age} years
              </li>
            ))}
          </ul>
        </div>
        <p><span className="font-medium">City:</span> {formData.city}</p>
        <div>
          <p className="font-medium">Medical Conditions:</p>
          <ul className="list-disc list-inside">
            {formData.medicalConditions.map(condition => (
              <li key={condition}>{condition}</li>
            ))}
          </ul>
        </div>
        <p>
          <span className="font-medium">WhatsApp Updates:</span>{' '}
          {formData.whatsappUpdates ? 'Enabled' : 'Disabled'}
        </p>
      </div>
      <p className="text-gray-600 mb-6">
        Our team will contact you shortly with the best insurance plans for your family.
      </p>
      <Button className="w-full" onClick={() => window.location.reload()}>
        Start New Application
      </Button>
    </div>
  );
};

export default Confirmation;