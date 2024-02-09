import { doc, updateDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const UpdateUser = ({ userToEdit, setUserToEdit }) => {
	return (
		<form onSubmit={event => editUser(event, userToEdit, setUserToEdit)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' defaultValue={userToEdit.name} />
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' defaultValue={userToEdit.email} />
			</div>
			<div>
				<label htmlFor='name'>Active</label>
				<input
					type='checkbox'
					name='active'
					defaultChecked={userToEdit.active}
				/>
			</div>
			<button>Update User</button>
		</form>
	);
};

const editUser = async (event, userToEdit, setUserToEdit) => {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const active = event.target.active.checked;

	if (!name || !email) return;

	const updateData = {
		name,
		email,
		active
	};

	const userToUpdate = doc(usersCollectionReference, userToEdit.id);
	await updateDoc(userToUpdate, updateData);
	setUserToEdit();
};

export default UpdateUser;
