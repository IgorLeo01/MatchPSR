import React from "react";

interface FormProps {
  currentStep: number;
  currentComponent: React.ComponentType<any>;
  changeStep: (i: number, event?: React.FormEvent<HTMLFormElement>) => void;
  isLastStep: any;
}

export function useForm(steps: React.ComponentType<any>[]): FormProps {
  const [currentStep, setCurrentStep] = React.useState(0);

  function changeStep(i: number, event?: React.FormEvent<HTMLFormElement>) {
    if (event) {
      event.preventDefault();
    }

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }
  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep:
      currentStep === 2 || currentStep === 3 || currentStep === 4
        ? true
        : false,
  };
}
