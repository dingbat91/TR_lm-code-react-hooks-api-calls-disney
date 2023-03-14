// our props have two properties - a number, and a function that takes a number and returns void
// we can define this as an interface, or anonymously like this:
const Navigation: React.FC<{
	currentPage: number;
	setCurrentPage: (page: number) => void;
	favFlag: boolean;
	setFavFlag: (flag: boolean) => void;
}> = ({ currentPage, setCurrentPage, favFlag, setFavFlag }) => {
	const nextPage = () => {
		const newPageNumber = currentPage + 1;
		setCurrentPage(newPageNumber);
	};

	const prevPage = () => {
		if (currentPage > 1) {
			const newPageNumber = currentPage - 1;
			setCurrentPage(newPageNumber);
		}
	};

	const toggleFlag = () => {
		console.log("Flag clicked");
		if (favFlag) {
			setFavFlag(false);
		} else {
			setFavFlag(true);
		}
		console.log(favFlag);
	};

	return (
		<div className='navigation'>
			<div className='navigation__item'>
				<button className='navigation__button' onClick={prevPage}>
					Prev Page
				</button>
			</div>
			<div className='navigation__item'>
				<button className='navigation__button' onClick={toggleFlag}>
					{favFlag ? "Show All" : "Show Favourites"}
				</button>
			</div>
			<div className='navigation__item'>
				<button className='navigation__button' onClick={nextPage}>
					Next Page
				</button>
			</div>
		</div>
	);
};

export default Navigation;
