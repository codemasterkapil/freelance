import "./assets/PdfUpload.css"
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Cross from "../Cross/Cross";
import Dropdown from "../Window/StudyWhat/Dropdown.jsx"

const PdfUpload = () => {

    const lesson = ["l1", "l2", "l3"];

    return (
        <div className="upload_outer_container">
            <div className="upload_outer_container_background">
                <Cross />
                <div className="upload_container">
                    <p className="upload_heading">Upload PDF for lesson summary generation</p>
                    <div className="upload">
                        <div className="file_upload_container">
                            <p>file upload *</p>
                            <div className="file_upload">
                                <div className="uploader">
                                    <AiOutlineCloudUpload className="uploader_img"/>
                                    <p>Deag&Drop file here</p>
                                    <p>or</p>
                                    <input type="file" />
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
                                    <Dropdown options={lesson} type={"Unit*"}/>
                                </div>
                                <div className="uload_from_group">
                                    <p>Lesson date*</p>
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PdfUpload;