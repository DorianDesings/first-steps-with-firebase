import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';
import withAuth from '../../hocs/withAuth';

const Login = () => {
	const [loginData, setLoginData] = useState({});

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={event => loginUser(event, loginData)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						onInput={event =>
							setLoginData({ ...loginData, email: event.target.value })
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
							setLoginData({ ...loginData, password: event.target.value })
						}
					/>
				</div>
				<button disabled={!loginData.email || !loginData.password}>
					Login
				</button>
			</form>
		</>
	);
};

const loginUser = async (event, loginData) => {
	event.preventDefault();
	const { email, password } = loginData;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
	} catch (error) {
		console.error('Error registering user:', error.code, error.message);
	}
};

export default withAuth(Login, { isAuth: false });
