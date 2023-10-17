import { createContext, useState, useEffect, useRef } from 'react';

export const AccountContext = createContext(null);


const AccountProvider = ({ children }) => {


  //Loading
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);

  //pop_up
  const [popUp, setPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(null);
  const [popUpType, setPopUpType] = useState(null);

  //Student Credentials
  const [person, setPerson] = useState(null)
  //Student Courses
  const [studentCourses, setStudentCourses] = useState(null);

  //teacher credentials
  const [teacher, setTeacher] = useState(null)
  //teacher course
  const [teacherCourses, setTeacherCourses] = useState(null);


  return (
    <AccountContext.Provider value={{
      person, setPerson,
      studentCourses, setStudentCourses,
      teacher, setTeacher,
      teacherCourses, setTeacherCourses,
      loading, setLoading,
      loadingMessage, setLoadingMessage,
      popUp, setPopUp,
      popUpMessage, setPopUpMessage,
      popUpType, setPopUpType
    }}>
      {children}
    </AccountContext.Provider>

  )
}

export default AccountProvider;