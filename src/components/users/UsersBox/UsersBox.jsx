import UsersInfo from '../UsersInfo/UsersInfo';
import UsersLikes from '../UsersLikes/UsersLikes';
import UsersStorage from '../UsersStorage/UsersStorage';
import { Container, Divider, UserSection } from './UsersBox.style';

const UsersBox = () => {
	return (
		<Container>
			<UserSection>
				<UsersInfo />
				<Divider />
				<UsersStorage />
				<Divider />
				<UsersLikes />
			</UserSection>
		</Container>
	);
};

export default UsersBox;
