interface FormProps {
    setForm: (data: FormData) => void;
    formData: FormData;
    navigation: {
      previous: () => void;
      next: () => void;
    };
}
export default FormProps;