import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
    return (
        <div className="App">

            <form>
                <div>
                <label className='relative lg:mt-1 lg:text-left lg:font-bold float-left'>Title</label>
                <input type='text' className='relative lg:pb-8 lg:h-6 lg:w-14 lg:bg-gray-light rounded'/>
                </div>
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={editor => {
                    // Allows you to store the editor instance and use it later.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(_event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(_event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            </form>

            <div>
                <button className="relative lg:mt-10 lg:text-white lg:bg-blue lg:w-12 lg:h-6 rounded hover:bg-light-blue">
                    Post
                </button>
            </div>
        </div>
    );
}
export default Editor;