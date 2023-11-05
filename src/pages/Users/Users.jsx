import { Outlet } from 'react-router-dom';
import UsersBox from '../../components/users/UsersBox/UsersBox';
import { UsersPageContainer } from './Users.style';

const Users = () => {
	return (
		<UsersPageContainer>
			<UsersBox />
			<Outlet />
		</UsersPageContainer>
	);
};

export default Users;
