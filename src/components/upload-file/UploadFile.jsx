import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import { useState } from 'react';

const UploadFile = () => {
	const [preview, setPreview] = useState();
	return (
		<>
			{preview && <img src={preview} />}
			<form onSubmit={e => e.preventDefault()}>
				<input type='file' onChange={event => uploadFile(event, setPreview)} />
			</form>
		</>
	);
};

const uploadFile = async (event, setPreview) => {
	const file = event.target.files[0];
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, `marcos/${finalName}`);

	await uploadBytes(storageRef, file);
	const imageUrl = await getDownloadURL(storageRef);
	setPreview(imageUrl);
};
export default UploadFile;
