export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  if (isNumber(value) && value !== undefined) {
    return true;
  }
  if (value === undefined) {
    return false;
  }
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  if (isNumber(value)) {
    return value.toString().length >= minLength;
  }
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}

export function isNumber(value) {
  return !isNaN(value);
}

export function validateVehicle(formData) {
  const validationRules = [
    { field: "make", validate: isNotEmpty, message: "Make is required" },
    { field: "model", validate: isNotEmpty, message: "Model is required" },
    {
      field: "model",
      validate: (value) => hasMinLength(value, 2),
      message: "Model must be at least 2 characters",
    },
    { field: "year", validate: isNotEmpty, message: "Year is required" },
    {
      field: "year",
      validate: (value) => hasMinLength(value, 4),
      message: "Year must be 4 digits",
    },
    { field: "year", validate: isNumber, message: "Year must be a number" },
    { field: "price", validate: isNotEmpty, message: "Price is required" },
    { field: "price", validate: isNumber, message: "Price must be a number" },
    { field: "imageUrl", validate: isNotEmpty, message: "Image is required" },
    { field: "color", validate: isNotEmpty, message: "Color is required" },
    { field: "mileage", validate: isNotEmpty, message: "Mileage is required" },
    {
      field: "mileage",
      validate: isNumber,
      message: "Mileage must be a number",
    },
    { field: "type", validate: isNotEmpty, message: "Type is required" },
    {
      field: "gearboxType",
      validate: isNotEmpty,
      message: "Gearbox Type is required",
    },
    {
      field: "fuelType",
      validate: isNotEmpty,
      message: "Fuel Type is required",
    },
  ];

  const errors = {};

  validationRules.forEach(({ field, validate, message }) => {
    const value = formData[field];
    if (!validate(value)) {
      errors[field] = message;
    }
  });

  return errors;
}
