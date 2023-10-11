import "../../components/StudentHeader/assets/StudentHeader.css"

const StudentHeader = () => {
    return (
        <div className="header">
            <div className="header_container">
                <div className="left">
                    <div className="left_left">
                        <img className="rocket" src={require("../../assets/rocket.png")} alt="" />
                        <p>ALBy Study</p>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li>Main menu</li>
                        <li>Schedule block</li>
                        <li>Study now</li>
                        <li className="profile">
                            <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" className="profile_img"/>
                            Vivan
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StudentHeader;