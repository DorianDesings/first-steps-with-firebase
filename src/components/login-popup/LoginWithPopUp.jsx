import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../../config/firebase.config';
import withAuth from '../../hocs/withAuth';

const googleProvider = new GoogleAuthProvider();

const LoginWithPopUp = () => {
	return (
		<>
			<h2>Social Login</h2>
			<button onClick={signInWithGoogle}>Login With Google</button>
		</>
	);
};

const signInWithGoogle = async () => {
	try {
		await signInWithPopup(auth, googleProvider);
	} catch (error) {
		console.error(error);
	}
};
export default withAuth(LoginWithPopUp, { isAuth: false });
