import * as yup from "yup";

// export const careerApplySchema = yup.object({
//   fullName: yup.string().required("This field is required !"),
//   email: yup.string().email().required("This field is required !"),
//   phoneNumber: yup.string().required("Phone number is must be required"),
//   totalExperience: yup.number().required("This field is required !"),
//   myFile: yup.string().required("This field is required !"),
//   recaptchaToken: yup.string().required("Check the captcha."),
// });

export const careerApplyValidation = {
  initialState: {
    fullName: "",
    email: "",
    phoneNumber: "",
    totalExperience:"",
    myFile:"",
    // recaptchaToken: "",
  },
  schema: yup.object().shape({
    fullName: yup.string().required("This field is required !"),
    email: yup.string().email().required("This field is required !"),
    phoneNumber: yup.string().required("Phone number is must be required"),
    totalExperience: yup.number().required("This field is required !"),
    myFile: yup.string().required("This field is required !"),
    // recaptchaToken: yup.string().required("Check the captcha."),
  }),
};

export const getAQuoteSchema = yup.object({
  name: yup.string().required("This field is required !"),
  email: yup.string().email().required("This field is required !"),
  // country: yup.string().required("This field is required !"),
  phoneNumber: yup.string().required("Phone number is must be required"),
  projectRequirement: yup.string().required("This field is required"),
  recaptchaToken: yup.string().required("Check the captcha."),
});
const phoneRegExp =
  /^(\+[1-9]{1,4}[ -]*)|(\([0-9]{2,3}\)[ -]*)|([0-9]{2,4}[ -]*)*?[0-9]{3,4}?[ -]*[0-9]{3,4}?$/;

export const getFreeQuoteSchema = yup.object({
  name: yup.string().required("This Field is required !"),
  email: yup.string().email().required("This field is required !"),
  country: yup.string().required("This field is required !"),
  // phoneNumber: yup.string().required("Phone number is must be required"),
  phoneNumber: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid"),
  // .min(8, "too short")
  // .max(15, "too long"),
  projectRequirement: yup.string().required("This field is required"),
  // recaptchaToken: yup.string().required("Check the captcha."),
});
