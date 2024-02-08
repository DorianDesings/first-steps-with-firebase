import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/Auth.context';

const Register = () => {
	const { loading, currentUser } = useContext(AuthContext);
	const [registerData, setRegisterData] = useState({});

	if (loading || currentUser) return;

	return (
		<>
			<h2>Register</h2>
			<form onSubmit={event => registerUser(event, registerData)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						onInput={event =>
							setRegisterData({ ...registerData, email: event.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						name='password'
						id='password'
						onInput={event =>
							setRegisterData({ ...registerData, password: event.target.value })
						}
					/>
				</div>
				<button disabled={!registerData.email || !registerData.password}>
					Register
				</button>
			</form>
		</>
	);
};

const registerUser = async (event, registerData) => {
	event.preventDefault();
	const { email, password } = registerData;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		console.log('User Registered');
		event.target.reset();
	} catch (error) {
		console.error('Error registering user:', error.code, error.message);
	}
};

export default Register;
