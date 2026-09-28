import { type SubmitEvent, useState } from "react";
import { authClient } from "../lib/auth-client";
import { signupSchema } from "../schema/auth.schema";

type FormErrors = {
	name?: string;
	email?: string;
	password?: string;
};

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<FormErrors>({});

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = signupSchema.safeParse({
			name,
			email,
			password,
		});

		if (!result.success) {
			const nextErrors: FormErrors = {};

			for (const issue of result.error.issues) {
				const field = issue.path[0];

				if (field === "name" || field === "email" || field === "password") {
					nextErrors[field] = issue.message;
				}
			}

			setErrors(nextErrors);

			return;
		}

		setErrors({});

		const response = await authClient.signUp.email(result.data);
		if (response.error) {
			console.log(response.error.message);
			return;
		}
		console.log(response.data);
	};
	return (
		<form
			noValidate
			onSubmit={handleSubmit}
			className="flex items-center justify-center h-screen"
		>
			<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
				<legend className="fieldset-legend">S’inscrire</legend>

				<label htmlFor="name" className="label">
					Name
				</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					id="name"
					className="input"
					placeholder="name"
				/>
				{errors.name && <p className="text-error">{errors.name}</p>}

				<label htmlFor="email" className="label">
					Email
				</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					id="email"
					className="input"
					placeholder="Email"
				/>
				{errors.email && <p className="text-error">{errors.email}</p>}

				<label htmlFor="password" className="label">
					Password
				</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					id="password"
					type="password"
					className="input"
					placeholder="Password"
				/>
				{errors.password && <p className="text-error">{errors.password}</p>}

				<button type="submit" className="btn btn-neutral mt-4">
					S’inscrire
				</button>
			</fieldset>
		</form>
	);
}
