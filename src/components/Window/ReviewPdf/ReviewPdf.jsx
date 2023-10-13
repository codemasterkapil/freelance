import { useState ,useRef} from 'react'
import './assets/ReviewPdf.css';
import Cross from '../../Cross/Cross';
import { BsCloudUpload } from 'react-icons/bs';

const ReviewPdf = ({handle_ReviewPdfVisible}) => {

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
            <Cross window_cut={handle_ReviewPdfVisible}/>
            <div className='outer-upload-container'>
                <p className='header-p-review'>Review generated the generated lesson and reupload with any revisions</p>
                <div className="content-container">
                    <div className="left-content">
                        <p className="left-content-p">
                            Revised Lesson Summary
                        </p>
                        <img className="img-rocket" src={require('../../../assets/drugs.png')} alt="" />
                        <div className="inner-pdf-show">

                        </div>
                        <button className='uploader-btn'>download lesson summary </button>
                    </div>
                    <div className="right-content">
                        <p className="right-content-p">
                            Revised Lesson Summary
                        </p>
                        <img className="img-rocket" src={require('../../../assets/rocket.png')} alt="" />
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

                        <div className="message-stu">
                            <p className="right-msg-p">
                                Add a message for your students:
                            </p>
                            <textarea name="postContent" placeholder="Notes about today's lecture" className='right-msg-in' onChange={handlePostContentChange} />
                        </div>
                        <button className='uploader-btn'>Upload Final lesson summary</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReviewPdf
