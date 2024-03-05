import * as yup from "yup";

const ValidationSchema = () => {
  const getAQuoteSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email field is required !"),
    phoneNumber: yup.string().required("Phone number is must be required"),
    projectRequirement: yup
      .string()
      .trim()
      .required("Message is must be required"),
    // recaptchaToken: yup.string().required("Check the captcha."),
  });

  const contactUsSchema = yup.object().shape({
    name: yup.string().required("Name is required !"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email field is required"),
    phoneNumber: yup.string().required("Phone number is must be required"),
    projectRequirement: yup.string().required("Requirement field is required"),
    budget: yup.string().required("Budget field is required"),
    skypeId: yup.string().required("skypeId field is required"),
    country: yup.string().required("country field is required"),
  });

  const getFreeQuoteSchema = yup.object().shape({
    name: yup.string().required("Name is required !"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email field is required"),
    phoneNumber: yup.string().required("Phone number is must be required"),
    projectRequirement: yup.string().required("Requirement field is required"),
    country: yup.string().required("country field is required"),
  });

  const careerApplySchema = yup.object().shape({
    fullName: yup.string().required("This field is required !"),
    email: yup.string().email().required("This field is required !"),
    phoneNumber: yup.string().required("Phone number is must be required"),
    totalExperience: yup.string().required("This field is required !"),
    myFile: yup
      .mixed()
      .required("resume is required")
      .test("fileSize", "File should be less than 2 MB!!!", (value) => {
        return value && value[0].size <= 2_000_000;
      })
      .test(
        "type",
        "Only the following formats are accepted: .pdf, .doc, .docx",
        (value) => {
          return (
            value &&
            (value[0].type === "application/pdf" ||
              value[0].type === "application/msword" ||
              value[0].type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
          );
        }
      ),
    // recaptchaToken: yup.string().required("Check the captcha."),
  });

  return {
    getAQuoteSchema,
    contactUsSchema,
    getFreeQuoteSchema,
    careerApplySchema,
  };
};

export default ValidationSchema;
