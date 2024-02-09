// const WithAuth = (WrappedComponent) => {
//     const WithAuthComponent = (props) => {
//       const { currentUser, loading } = useContext(AuthContext);
//       if (!currentUser || loading) {
//         // Puedes redirigir, mostrar un componente de carga, etc.
//         return <p>Cargando...</p>;
//       }

import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';

//       // Si el usuario está autenticado, renderiza el componente envuelto
//       return <WrappedComponent {...props} />;
//     };

//     // Asignar un nombre de pantalla al componente para evitar errores de "display name"
//     WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

//     return WithAuthComponent;
//   };

// eslint-disable-next-line react/display-name
const withAuth = (Component, condition) => props => {
	const { isAuth } = condition;
	const { loading, currentUser } = useContext(AuthContext);

	if (loading) return;

	if (isAuth && !currentUser) return;

	if (!isAuth && currentUser) return;

	// Pasa las props al componente original si la condición se cumple
	return <Component {...props} />;
};

export default withAuth;
