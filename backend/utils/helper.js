const isValidEmail = (email) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return email.match(emailRegex);
};

const isValidPhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^[6-9]\d{9}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export { isValidEmail, isValidPhoneNumber };
