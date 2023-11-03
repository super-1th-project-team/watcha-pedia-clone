const booksRequests = {
	fetchNewBooks: {
		QueryType: 'ItemNewAll',
		MaxResults: 30,
		start: 1,
		SearchTarget: 'Book',
	},
};

export default booksRequests;
