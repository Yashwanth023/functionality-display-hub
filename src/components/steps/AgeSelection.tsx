import React from 'react';
import { Button } from "@/components/ui/button";
import { FormData } from '../InsuranceForm';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
};

const AgeSelection = ({ formData, updateFormData, onNext }: Props) => {
  const updateAge = (type: string, age: number) => {
    const updatedMembers = formData.members.map(member =>
      member.type === type ? { ...member, age } : member
    );
    updateFormData({ members: updatedMembers });
  };

  const allAgesSelected = formData.members.every(member => member.age);

  return (
    <div>
      <h2 className="step-heading">Select age of covered member(s)</h2>
      <div className="space-y-4">
        {formData.members.map(member => (
          <div key={member.type} className="flex items-center gap-4">
            <div className="w-24 capitalize">{member.type}'s age</div>
            <Select
              value={member.age?.toString()}
              onValueChange={(value) => updateAge(member.type, parseInt(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select age" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
                  <SelectItem key={age} value={age.toString()}>
                    {age} yr
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <Button 
        className="w-full mt-6"
        onClick={onNext}
        disabled={!allAgesSelected}
      >
        Continue
      </Button>
    </div>
  );
};

export default AgeSelection;