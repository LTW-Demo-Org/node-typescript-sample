module.exports = {
  isValidLicense: (license) => {
    const ALLOWED_LICENSES = [
      // Derived from https://docs.google.com/document/d/1YoBqLoeaY-zCtH-NZB8EuY48pyD0Ipnc606kG7CnUsg/edit
      "MIT",
      "(MIT OR CC0-1.0)",
      "Apache-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "0BSD",
      // Approved by IP Legal as permissive licenses - 2022-09-15
      "ISC",
      "CC0-1.0",
      "Unlicense",
      "Python-2.0",
      // Deemed out of scope of Xero license policy by IP Legal as they're content licenses - 2022-09-15
      "CC-BY-3.0",
      "CC-BY-4.0",
      //Need to double check with below
      "BlueOak-1.0.0"
    ];
    return ALLOWED_LICENSES.includes(license);
  }
};