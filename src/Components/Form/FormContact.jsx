import { useFormik } from "formik";
import * as Yup from "yup";

const FormContact = ({ notify }) => {
  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik(
    {
      // Valores iniciales
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        isAcceptInfo: false,
      },
      // Muestro por consola el objeto con los datos, reseteo los inputs y envio mensaje.
      onSubmit: (values) => {
        console.log({values});
        resetForm({});
        notify("Thank you for contact us!");
      },
      // Validacion de cada input.
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("The email is not valid...")
          .required("Required"),
        message: Yup.string()
          .min(15, "Must contain at least 15 characters")
          .required("Required"),
      }),
    }
  );

  return (
    <div className="mt-0 sm:mt-14 md:mt-14 lg:mt-14">
      <div className=" ontainer mx-auto flex flex-col justify-center items-center my-10">
        <div>
          <h1 className="text-4xl font-bold uppercase mb-10 text-slate-300">
            Contact Us
          </h1>
        </div>

        <form
          className="w-full max-w-lg p-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Jane"
                {...getFieldProps("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <span className="text-red-500">{errors.firstName}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Doe"
                {...getFieldProps("lastName")}
              />
              {touched.lastName && errors.lastName && (
                <span className="text-red-500">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                type="email"
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-48 resize-none"
                type="text"
                {...getFieldProps("message")}
              ></textarea>
              {touched.message && errors.message && (
                <span className="text-red-500">{errors.message}</span>
              )}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Do you want to receive info from us?
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    {...getFieldProps("isAcceptInfo")}
                  />
                  {touched.isAcceptInfo && errors.isAcceptInfo && (
                    <span className="text-red-500">{errors.isAcceptInfo}</span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-sky-800 hover:bg-sky-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
