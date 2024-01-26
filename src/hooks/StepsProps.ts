export interface StepProps {
    onNextStep: (step: number) => void;
    updateFielHandler: (key: string, value: any) => void;
    data: any;
  }