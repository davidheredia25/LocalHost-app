export const sliceArray = (page, array) => {
	const ppp = 12;
	let sliced = array.slice((ppp * (page-1)), ((ppp * (page-1)) + ppp));
	return sliced;
}