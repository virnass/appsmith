export default {
	FilePicker1onFilesSelected () {
		{{
  const selectedFile = filePicker.files[0];
  if (selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    storeValue('logoimage', imageUrl);
  } else {
    storeValue('logoimage', null);
  }
}}

	}
}