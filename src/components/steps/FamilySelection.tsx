import React from 'react';
import { Button } from "@/components/ui/button";
import { FormData, FamilyMember } from '../InsuranceForm';
import { User, Users } from 'lucide-react';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

const FAMILY_MEMBERS: { type: FamilyMember['type']; label: string }[] = [
  { type: 'self', label: 'Self' },
  { type: 'wife', label: 'Wife' },
  { type: 'son', label: 'Son' },
  { type: 'daughter', label: 'Daughter' },
  { type: 'father', label: 'Father' },
  { type: 'mother', label: 'Mother' },
];

const FamilySelection = ({ formData, updateFormData }: Props) => {
  const toggleMember = (type: FamilyMember['type']) => {
    const members = formData.members;
    const exists = members.find(m => m.type === type);
    
    if (exists) {
      updateFormData({
        members: members.filter(m => m.type !== type)
      });
    } else {
      updateFormData({
        members: [...members, { type }]
      });
    }
  };

  const isSelected = (type: FamilyMember['type']) => 
    formData.members.some(m => m.type === type);

  return (
    <div>
      <h2 className="step-heading">Find the best plan for your family</h2>
      <div className="member-grid">
        {FAMILY_MEMBERS.map(({ type, label }) => (
          <div
            key={type}
            className={`member-card ${isSelected(type) ? 'selected' : ''}`}
            onClick={() => toggleMember(type)}
          >
            {type === 'self' ? (
              <User className="w-6 h-6 mb-2" />
            ) : (
              <Users className="w-6 h-6 mb-2" />
            )}
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Button 
        className="w-full mt-6" 
        onClick={() => updateFormData({ step: 2 })}
        disabled={formData.members.length === 0}
      >
        Continue
      </Button>
    </div>
  );
};

export default FamilySelection;