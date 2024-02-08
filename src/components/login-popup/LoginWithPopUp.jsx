import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/Auth.context';

const googleProvider = new GoogleAuthProvider();

const LoginWithPopUp = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (currentUser || loading) return;

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

export default LoginWithPopUp;
