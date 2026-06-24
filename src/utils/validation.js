import validator from "validator";

export const validateLoginData = (emailId, password) => {
  if (!emailId) {
    return "Email is required ! ";
  }

  if (!validator.isEmail(emailId)) {
    return "Please enter a valid email";
  }
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return null;
};
