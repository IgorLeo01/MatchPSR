import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import UserType from "./Steps/UserType";
import Professional from "./Steps/professional";
import FormProps from "./FormProps";
import Person from "./Steps/Person";

interface FormData {
  Name: string;
  birth: string;
  UserTypeData: string;
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
  UserTypeData: "",
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
  { id: "initial" }, //identificação
  { id: "person" }, //informações para pessoas
  { id: "instituicao" }, //informações para empresas e organizações
];

const MultiStepForm: React.FC = () => {
  const [formData, setForm] = useForm<FormData>({ ...defaultFormConfig, steps });
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props: FormProps = { formData, setForm, navigation };

  switch (id) {
    case "initial":
      return <UserType {...props} />;
    case "person":
      return <Person {...props} />;
    case "instituicao":
      return <Professional {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;