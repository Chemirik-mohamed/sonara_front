import { Route, Routes } from "react-router";
import { Generate } from "../pages/Generate";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/signup" element={<SignUp />} />
			<Route path="/generate" element={<Generate />} />
		</Routes>
	);
}
