import isEmpty from "is-empty";
import Validator from 'validator'
const homeworkValidator = (data) => {
  let errors = {};
  data.subject = isEmpty(data.subject) ? "" : data.subject;
  data.description = isEmpty(data.description) ? "" : data.description;

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "subject field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default homeworkValidator;
