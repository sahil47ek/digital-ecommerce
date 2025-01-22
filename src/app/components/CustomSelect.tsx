'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string | React.ReactNode;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select option',
  className = ''
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        className={`flex items-center justify-between w-full pl-4 pr-10 py-3 h-12 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-1 animate-fadeIn">
          <div className="max-h-60 overflow-auto overscroll-contain">
            {options.map((option) => (
              <button
                key={option.value}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors duration-150
                  ${option.value === value ? 'text-primary font-medium bg-primary/5' : 'text-gray-700'}
                  ${option.value === value && 'hover:bg-primary/10'}`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 