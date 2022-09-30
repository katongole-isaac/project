import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { DecoupledEditor } from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const Editor = ({ letter, setLetter }) => {
	return (
		<CKEditor
			editor={ClassicEditor}
			onFocus={(event, editor) => {
				if (!letter);
				let data = localStorage.getItem("letter");
				editor.setData(data);
			}} 

			onChange={(event, editor) => {
				setLetter(editor.getData());
				console.log(editor);
				localStorage.setItem("letter", editor.getData());
			}}
		/>
	);
};

export default Editor;
