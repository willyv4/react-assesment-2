import { useState } from "react";

const ItemForm = ({ handleForm }) => {
  const INITIAL_STATE = {
    DrinkorSnack: "",
    Name: "",
    Description: "",
    Recipe: "",
    Serve: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleForm(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center mt-52 ">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-zinc-200 p-6 shadow-xl rounded-md"
      >
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between">
            <div className="w-1/2 mr-2">
              <div className="w-1/2 mr-2">
                <label className="text-md font-bold" htmlFor="DrinkorSnack">
                  DrinkorSnack
                </label>
                <select
                  className="p-2 border-2 border-sky-950 rounded-lg w-50"
                  id="DrinkorSnack"
                  name="DrinkorSnack"
                  value={formData.DrinkorSnack}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="snacks">Snack</option>
                  <option value="drinks">Drink</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 ml-2">
              <label className="text-md font-bold" htmlFor="Name">
                Name
              </label>
              <input
                className="p-2 border-2 border-sky-950 rounded-lg w-full"
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 mr-2">
              <label className="text-md font-bold" htmlFor="Description">
                Description
              </label>
              <textarea
                className="p-2 border-2 border-sky-950 rounded-lg w-full resize-none"
                type="text"
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="text-md font-bold" htmlFor="Recipe">
                Recipe
              </label>
              <textarea
                className="p-2 border-2 border-sky-950 rounded-lg w-full resize-none"
                type="text"
                id="Recipe"
                name="Recipe"
                value={formData.Recipe}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-md font-bold" htmlFor="Serve">
              Serve
            </label>
            <textarea
              className="p-2 border-2 border-sky-950 rounded-lg w-full resize-none"
              type="text"
              id="Serve"
              name="Serve"
              value={formData.Serve}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full px-4 py-2 bg-sky-950 text-white font-bold rounded-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
