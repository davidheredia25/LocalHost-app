
import { Route } from 'react-router-dom';
import {Home, Card, Cards, Details, Cart, NavBar, SearchBar} from "./components";







function App () {
	return (
		<div>
			<Home/>
			<Card/>
			<Cards/>
			<Details/>
			<NavBar/>
			<Cart/>
			<SearchBar/>
		</div>
		)
}



export default App;