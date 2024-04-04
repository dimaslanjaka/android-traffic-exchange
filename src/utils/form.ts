/**
 * form data to json string
 * @param formData html form or form data
 * @returns json string
 */
export const formDataToJSON = (formData: FormData | HTMLFormElement) => {
  if (formData instanceof HTMLFormElement) {
    formData = new FormData(formData);
  }
  if (!(formData instanceof FormData)) {
    throw TypeError('formData argument is not an instance of FormData');
  }

  const data = {} as Record<string, any>;
  for (const [name, value] of formData) {
    data[name] = value;
  }

  return JSON.stringify(data);
};
