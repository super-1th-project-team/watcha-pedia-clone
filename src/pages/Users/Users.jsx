import { Outlet } from 'react-router-dom';
import { UsersPageContainer } from './Users.style';

const Users = () => {
	return (
		<UsersPageContainer>
			<Outlet />
		</UsersPageContainer>
	);
};

export default Users;
