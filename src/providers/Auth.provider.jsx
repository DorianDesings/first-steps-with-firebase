import { useEffect, useState } from 'react';

import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('User autenticated', user);
				setCurrentUser(user);
			} else {
				console.log('No user');
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return () => unsuscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
