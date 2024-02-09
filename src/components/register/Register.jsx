import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';
import withAuth from '../../hocs/withAuth';

const Register = () => {
	const [registerData, setRegisterData] = useState({});

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

export default withAuth(Register, { isAuth: false });
