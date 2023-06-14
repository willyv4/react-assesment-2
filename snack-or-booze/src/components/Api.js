import axios from "axios";

const BASE_API_URL = "http://localhost:5000";


class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addItem(formData) {
    const result = await axios.post(
      `${BASE_API_URL}/${formData.DrinkorSnack}`,
      {
        id: formData.Name.toLowerCase(),
        name: formData.Name,
        description: formData.Description,
        recipe: formData.Recipe,
        serve: formData.Serve,
      }
    );
    return result.data;
  }
}

export default SnackOrBoozeApi;
