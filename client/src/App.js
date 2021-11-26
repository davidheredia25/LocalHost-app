import React from "react";
import { Route, Routes } from 'react-router-dom';
import {Home, Card, Cards, Details, Cart, NavBar, SearchBar, BrandContainer} from "./components";







function App () {
	return (
		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path="/admin/brand" element={<BrandContainer />} /> 
		</Routes>
	)
}



export default App;