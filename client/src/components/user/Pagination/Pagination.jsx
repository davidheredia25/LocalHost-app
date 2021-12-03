import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, getProducts } from "../../../redux/actions/products.actions";

const Pagination = () => {

	const productsPerPage = 12;
	const dispatch = useDispatch();
	const { page, products   } = useSelector(state => state.products);

	const changePage = (page) => {
		dispatch(setPage(page))
		// console.log(category);
		// if (category) {
		// 	dispatch(getProducts({category}));
		// }
		// else {
			dispatch(getProducts({}));
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
				disabled={products?.length <= (page * productsPerPage)}
				onClick={() => {changePage(page+1)}}
			>
				▶
			</button>
		</div>
	)
};

export default Pagination;