import { deleteDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { usersCollectionReference } from '../../config/firebase.config';
import UpdateUser from '../update-user/UpdateUser';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState();
	const [userToEdit, setUserToEdit] = useState();
	console.log(userToEdit);

	useEffect(() => {
		const subscribeToData = onSnapshot(usersCollectionReference, snapshot => {
			getAllUsers(snapshot, setUsers);
		});

		return () => subscribeToData();
	}, []);

	if (users.length === 0) return <h2>Loading users...</h2>;

	return (
		<>
			<h2>USERS</h2>
			{users.map(user => (
				<div key={user.id}>
					<p>{user.name}</p>
					<button onClick={() => getUserById(user.id, setUser)}>
						See Details
					</button>
					<button onClick={() => setUserToEdit(user)}>Edit User</button>
					<button onClick={() => deleteUser(user.id)}>Delete User</button>
				</div>
			))}

			{user && (
				<div>
					<p>{user.email}</p>
					<p>{user.name}</p>
					<p>{user.active ? 'Active' : 'Inactive'}</p>
					<button onClick={() => setUser()}>Close</button>
				</div>
			)}

			{userToEdit && (
				<UpdateUser userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
			)}
		</>
	);
};

const getAllUsers = async (snapshot, setUsers) => {
	const { docs } = snapshot;
	const users = docs.map(doc => ({ id: doc.id, ...doc.data() }));
	setUsers(users);
};

const getUserById = async (id, setUser) => {
	const userReference = doc(usersCollectionReference, id);
	try {
		const userDetails = await getDoc(userReference);
		setUser(userDetails.data());
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async id => {
	try {
		const userToDelete = doc(usersCollectionReference, id);
		await deleteDoc(userToDelete);
	} catch (error) {
		console.log(error);
	}
};

export default Users;
