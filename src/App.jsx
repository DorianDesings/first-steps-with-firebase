import LoginWithPopUp from './components/login-popup/LoginWithPopUp';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import UploadFile from './components/upload-file/UploadFile';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<h1>Firebase</h1>
			<AuthProvider>
				<Register />
				<Login />
				<Logout />
				<LoginWithPopUp />
				{/* <CreateUser /> */}
				{/* <Users /> */}
				<UploadFile />
			</AuthProvider>
		</>
	);
};

export default App;
