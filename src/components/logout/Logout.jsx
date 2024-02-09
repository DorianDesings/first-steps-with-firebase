import { signOut } from 'firebase/auth';

import { auth } from '../../config/firebase.config';

import withAuth from '../../hocs/withAuth';

const Logout = () => {
	return <button onClick={logout}>Logout</button>;
};

const logout = async () => {
	await signOut(auth);
};

export default withAuth(Logout, { isAuth: true });
