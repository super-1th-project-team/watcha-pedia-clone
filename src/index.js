import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Contents from './pages/Contents/Contents';
import Review from './pages/Review/Review';
import Decks from './pages/Decks/Decks';
import Search from './pages/Search/Search';
import Comments from './pages/Comments/Comments';
import Ratings from './components/users/Ratings/Ratings';
import ContentRatings from './components/users/ContentRatings/ContentRatings';
import ContentsBox from './components/users/ContentsBox/ContentsBox';
import Likes from './components/users/Likes/Likes';
import UsersComments from './components/users/UsersComments/UsersComments';
import UsersDecks from './components/users/UsersDecks/UsersDecks';
import { Provider } from 'react-redux';
import store from './store/store';
import ReviewMovies from './components/review/ReviewMovies/ReviewMovies';
import ReviewTVSeasons from './components/review/ReviewTVSeasons/ReviewTVSeasons';
import ReviewBooks from './components/review/ReviewBooks/ReviewBooks';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'users/:id',
				element: <Users />,
				children: [
					{
						path: 'ratings',
						element: <Ratings />,
					},
					{
						path: 'comments',
						element: <UsersComments />,
					},
					{
						path: 'decks',
						element: <UsersDecks />,
					},
					{
						path: 'contents/:contentType',
						element: <ContentsBox />,
					},
					{
						path: 'contents/:contentType/ratings',
						element: <ContentRatings />,
					},
					{
						path: 'likes',
						element: <Likes />,
					},
				],
			},
			{
				path: 'contents/:id',
				element: <Contents />,
			},
			{
				path: 'review',
				element: <Review />,
				children: [
					{
						path: 'movies',
						element: <ReviewMovies />,
					},
					{
						path: 'tv_seasons',
						element: <ReviewTVSeasons />,
					},
					{
						path: 'books',
						element: <ReviewBooks />,
					},
				],
			},
			{
				path: 'decks/:id',
				element: <Decks />,
			},
			{
				path: 'search',
				element: <Search />,
			},
			{
				path: 'comments/:id',
				element: <Comments />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</Provider>
	</React.StrictMode>,
);
