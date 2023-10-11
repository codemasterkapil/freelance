import "../../components/StudentHeader/assets/StudentHeader.css"
import "../../components/Teacher_dasboard/assets/TeacherHeader.css"

const Teacher_header = () => {
    return (
        <div className="header">
            <div className="header_container">
                <div className="teacher_left">
                    <img className="rocket" src={require("../../assets/rocket.png")} alt="" />
                    <p>ALBy Educator</p>
                </div>
                <div className="right">
                    <ul>
                        <li>Main menu</li>
                        <li>Addn course</li>
                        <li>Schedule test</li>
                        <li className="profile">
                            <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" className="profile_img"/>
                            Mr. Fox
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Teacher_header;