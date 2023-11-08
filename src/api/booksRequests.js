const booksRequests = {
	fetchNewBooks: {
		QueryType: 'ItemNewAll',
		MaxResults: 30,
		start: 1,
		SearchTarget: 'Book',
	},
	fetchBestSeller: {
		QueryType: 'Bestseller',
		MaxResults: 30,
		start: 1,
		SearchTarget: 'Book',
	},
	fetchForeignBestSeller: {
		QueryType: 'Bestseller',
		MaxResults: 30,
		start: 1,
		SearchTarget: 'Foreign',
	},
	fetchBlogBestSeller: {
		QueryType: 'BlogBest',
		MaxResults: 30,
		start: 1,
		SearchTarget: 'Book',
	},
	fetchUsedBooks: {
		QueryType: 'ItemNewAll',
		MaxResults: 30,
		start: 1,
		SearchTarget: 'Used',
		SubSearchTarget: 'Book',
	},
	fetchLookUp: {
		ItemIdType: 'ItemId',
		Cover: 'MidBig',
		Output: 'JS',
	},
};

export default booksRequests;
