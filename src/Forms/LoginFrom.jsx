import { useForm } from "react-hook-form";
import Field from "../Component/Field";
import FieldSet from "../Component/FieldSet";

const LoginFrom = () => {

    // from React Hook From 
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const submitForm = (formData) => {
        console.log(formData);

        // user validation check  =====
        const user = { email: 'x@example.com', password: '123456789' }

        const found = formData.email === user.email && formData.password === user.password;

        if (!found) {
            setError("root.random", {
                message: `User with email '${formData.email}' is not found`,
                type: "random"
            })
        }


    }

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <form className="  bg-slate-200 p-10 rounded-lg shadow-md "
                onSubmit={handleSubmit(submitForm)}>
                <FieldSet label="Enter Login Details">

                    {/* Email field  */}
                    <Field label="Email" error={errors.email}>
                        <input
                            {...register("email", { required: "Email is required." })}
                            className={`p-2 border box-border w-[300px] rounded-md ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email address"
                        />
                    </Field>
                    {/* Password field  */}
                    <Field label="Password" error={errors.password}>
                        <input
                            {...register("password", {
                                required: "Password is required.",
                                minLength: {
                                    value: 8,
                                    message: "Your password must be at least 8 characters."
                                }
                            })}
                            className={`p-2 border box-border w-[300px] rounded-md ${!!errors.password ? "border-red-500" : "border-gray-200"}`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                        />
                    </Field>
                </FieldSet>
                <div>{errors?.root?.random?.message}</div>

                {/* submit field  */}
                <Field>
                    <button
                        className="text-md text-white cursor-pointer p-2 border rounded-lg bg-slate-600 m-auto"
                    >Login </button>

                </Field>
            </form>
        </div>
    );
};

export default LoginFrom;