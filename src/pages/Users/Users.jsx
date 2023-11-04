import { Outlet } from 'react-router-dom';
import UsersBox from '../../components/users/UsersBox/UsersBox';

const Users = () => {
	return (
		<div>
			<UsersBox />
			<Outlet />
		</div>
	);
};

export default Users;
