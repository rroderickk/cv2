import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@containers/Layout";
import { Cv2 } from "@pages/Cv2";

const App =()=> { return (

	<BrowserRouter basename="/cv2">
		<Layout>
			<Routes>
				<Route exact path="/" element={<Cv2 />} />
			</Routes>
		</Layout>
	</BrowserRouter>

); }; export { App };
