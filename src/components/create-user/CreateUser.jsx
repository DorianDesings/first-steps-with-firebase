import { addDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const CreateUser = () => {
	return (
		<form onSubmit={createUser}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' />
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' />
			</div>
			<div>
				<label htmlFor='name'>Active</label>
				<input type='checkbox' name='active' />
			</div>
			<button>Create User</button>
		</form>
	);
};

const createUser = async event => {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const active = event.target.active.checked;

	if (!name || !email) return;

	const newUser = {
		name,
		email,
		active
	};
	try {
		await addDoc(usersCollectionReference, { ...newUser });
	} catch (error) {
		console.error(error);
	}

	event.target.reset();
};

export default CreateUser;
