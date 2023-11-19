import { FormEvent, useState } from "react";
import { Schema, validation } from "../models/Validation";
import { useUser } from "../contexts/UserContext";
import { login } from "../services/users";

export function LoginPage() {
  const { updateToken, user, logout } = useUser();

  const [formData] = useState<Schema>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Schema>>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (user !== null) {
      logout();
      return;
    }
    const response = validation.safeParse(formData);
    if (!response.success) {
      const parsedErrors = response.error.format();

      setErrors((preErrors) => {
        preErrors = {};
        for (const objectKey in formData) {
          const key = objectKey as keyof Schema;
          preErrors[key] = parsedErrors[key]?._errors[0];
        }

        return preErrors;
      });
    }
    handelClick();
  }

  async function handelClick() {
    const token = await login({
      email: formData.email,
      password: formData.password,
    });
    if (token !== null) updateToken(token);
  }

  return (
    <div className=" h-screen items-center  flex justify-center hebrew ">
      <form onSubmit={handleSubmit}>
        <div className="border border-blue-600 rounded-md shadow-md p-5">
          <h1 className="text-center text-3xl text-blue-700 underline p-3">
            טופס התחברות
          </h1>
          <div>
            <label className="block text-blue-500" htmlFor="email">
              איימיל
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => (formData.email = e.target.value)}
              id="email"
            />
            {errors.password && (
              <small className="text-red-500 block">{errors.email}</small>
            )}
          </div>
          <div>
            <label className="block text-blue-500" htmlFor="password">
              סיסמא
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => (formData.password = e.target.value)}
              id="password"
            />
            {errors.email && (
              <small className="text-red-500 block">{errors.password}</small>
            )}
          </div>
          <div className="flex justify-center p-3">
            <button className="button"> {user ? "התנתקות" : "התחברות"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}
