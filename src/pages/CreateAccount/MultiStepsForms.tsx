import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Personal from "./Steps/personal";
import Professional from "./Steps/professional";
import FormProps from "./FormProps";

interface FormData {
  Name: string;
  birth: string;
  email: string;
  phone: string;
  password: string;
  zip: string;
  city: string;
  CNH: string;
  document: number;
  address: string;
  skills: string[];
  companyName: string[];
  position: string[];
  working: boolean;
  start: string;
  end: string;
}

const defaultFormConfig: FormData = {
  Name: "",
  birth: "",
  email: "",
  phone: "",
  password: "",
  zip: "",
  city: "",
  CNH: "",
  document: 0, 
  address: "",
  skills: [], 
  companyName: [], 
  position: [],
  working: false, 
  start: "",
  end: "",
};

const steps = [
  { id: "Pessoais" },
  { id: "Profissionais" },
];

const MultiStepForm: React.FC = () => {
const [formData, setForm] = useForm<FormData>({ defaultFormConfig, steps });
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props: FormProps = { formData, setForm, navigation };

  switch (id) {
    case "Pessoais":
      return <Personal {...props} />;
    case "Profissionais":
      return <Professional {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
