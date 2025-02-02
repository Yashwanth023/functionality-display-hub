import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FormData } from '../InsuranceForm';
import { Input } from "@/components/ui/input";
import { Building2 } from 'lucide-react';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
};

const POPULAR_CITIES = [
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Delhi',
  'Goa',
  'Kochi',
  'Kolkata',
  'Mangalore',
  'Hyderabad'
];

const CitySelection = ({ formData, updateFormData, onNext }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const selectCity = (city: string) => {
    updateFormData({ city });
  };

  return (
    <div>
      <h2 className="step-heading">Select your city</h2>
      <Input
        type="text"
        placeholder="Search city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="city-grid">
        {POPULAR_CITIES.filter(city =>
          city.toLowerCase().includes(searchTerm.toLowerCase())
        ).map(city => (
          <div
            key={city}
            className={`city-chip ${formData.city === city ? 'selected' : ''}`}
            onClick={() => selectCity(city)}
          >
            {city}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-6 text-sm text-gray-600">
        <Building2 className="w-4 h-4" />
        <p>This will help us in finding the network of Cashless Hospitals in your city</p>
      </div>
      <Button 
        className="w-full mt-6"
        onClick={onNext}
        disabled={!formData.city}
      >
        Continue
      </Button>
    </div>
  );
};

export default CitySelection;