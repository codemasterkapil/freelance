import "./assets/PdfUpload.css"
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Cross from "../Cross/Cross";
import Dropdown from "../Window/StudyWhat/Dropdown.jsx"
import {useRef,useState} from 'react'
import { BsCloudUpload } from 'react-icons/bs';

const PdfUpload = ({handle_PdfUploadVisible}) => {

    const lesson = ["l1", "l2", "l3"];

    const [file, setFile] = useState(null);
    const [postContent, setPostContent] = useState('');
    const fileInputRef = useRef(null);

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };



    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            console.log('Selected file:', selectedFile);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };



    return (
        <div className="window_container">
            <Cross window_cut={handle_PdfUploadVisible}/>
            <div className="upload_outer_container_background">
                <div className="upload_container">
                    <p className="upload_heading">Upload PDF for lesson summary generation</p>
                    <div className="upload">
                        <div className="file_upload_container">
                            <p>file upload *</p>
                            {/* <div className="file_upload">
                                <div className="uploader">
                                    <AiOutlineCloudUpload className="uploader_img"/>
                                    <p>Drag&Drop file here</p>
                                    <p>or</p>
                                    <input type="file" />
                                </div>
                            </div> */}
                            <div className="drag-drop-right">

                                <div className='drag-drop-inner'
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <BsCloudUpload className='dropper-icon' />
                                    <p className='insider-para'>Drag & Drop files here</p>
                                    <p className='insider-para'>Or</p>
                                </div>
                                <div className="file-input-container-b">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf, .jpg, .jpeg, .png"
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <button className="file-input-button" onClick={handleButtonClick}>
                                        Browse Files
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="file_info_container">
                            <div className="file_info">
                                <div className="uload_from_group">
                                    <p>Lesson Name*</p>
                                    <input
                                        type="text"
                                        placeholder="Lesson 1 - Acid and Base"
                                    />
                                </div>
                                <div className="uload_from_group">
                                    <Dropdown options={lesson} type={"Unit*"} />
                                </div>
                                <div className="uload_from_group">
                                    <p>Lesson date*</p>
                                    <input type="date" />
                                </div>
                                <button className="generate_summary">Generate summar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PdfUpload;