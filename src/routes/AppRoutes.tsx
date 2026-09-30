import { Route, Routes } from "react-router";
import { Generate } from "../pages/Generate";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/generate" element={<Generate />} />
		</Routes>
	);
}
