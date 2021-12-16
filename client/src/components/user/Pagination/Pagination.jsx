import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, getProducts } from "../../../redux/actions/products.actions";

const Pagination = () => {

	const productsPerPage = 12;
	const dispatch = useDispatch();
	const { page, allProducts, products   } = useSelector(state => state.products);
	const {brand, category, subcategory, name, order } = useSelector(state => state.filters)

	const changePage = (page) => {
		dispatch(setPage(page))
		// console.log(category);
		// if (category) {
		// 	dispatch(getProducts({category}));
		// }
		// else {
			dispatch(getProducts({brand, category, subcategory, name, order}));
		// }
	}

	return (
		<div>
			<button
				disabled={page-1 === 0}
				onClick={() => {changePage(page-1)}}
			>
				◀
			</button>
			<label>{page}</label>	
			<button
				disabled={allProducts?.length <= (page * productsPerPage)}
				onClick={() => {changePage(page+1)}}
			>
				▶
			</button>
		</div>
	)
};

export default Pagination;