import { useState, useEffect } from 'react'
import '../../components/Quiz/assets/Quiz.css';
import Header from '../StudentPage/StudentHeader';
import Footer from '../StudentPage/Footer';
import axios from 'axios';
import Reason from './Reason';
import Ticked from './Ticked';
import rocket from '../../assets/rocket.png';
import Loader from "../../components/Loader/Loader.jsx"

const Quiz = () => {

    const [questions, setQuestions] = useState([]);
    const [total, setTotal] = useState();
    const [answer, setAnswer] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const get_data = async () => {
            try {
                const response = await axios.get('https://portal-9bua.onrender.com/quizinit');
                setQuestions(response.data.responseObbject.qsets);
                setTotal(response.data.responseObbject.results);
                setLoading(false);
            } catch (error) {
                console.log('error while fetching quiz questions');
            }
        };

        get_data();
    }, []);


    const handleOptionChange = (questionId, option) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [questionId]: option,
        }));
    };

    const handleSubmit = async () => {

        try {
            const response = await axios.get('https://portal-9bua.onrender.com/quizres');
            setAnswer(response.data.responseObject.asets);
            console.log(selectedOptions);
            setSubmitted(true);

            const transformedData = {};


            response.data.responseObject.asets.forEach((asset) => {
                const questionId = asset.questionId;


                transformedData[questionId] = {
                    verdict: asset.verdict
                };


                for (const key in asset.options) {
                    if (asset.options.hasOwnProperty(key)) {
                        const option = asset.options[key];
                        transformedData[questionId][key] = option;
                    }
                }
            });

            //console.log(transformedData);
            setAnswer(transformedData);



        } catch (error) {
            console.log('error while fetching quiz answers');
        }

    };

    return (
        <div className='quiz_page'>
            {loading && <Loader text={"please wait while qustion are loading"}/>}
            <Header />
            <div className='quiz-container'>
                <div className="Quiz-innercontainer">
                    <img src={rocket} alt="" className="quiz-container-img" />
                    <p className='quiz-container-p2'>Multiple choice quiz</p>
                    <img src={rocket} alt="" className="quiz-container-img" />
                </div>
                <div className="quiz-pdf">
                    <h4 className='Quiz-header'>Below attempt the {total} questions quiz. Good Luck!</h4>
                    <div className="questionnaire-container">
                        <div className="question-list">
                            {questions.map((question, val) => (
                                <div key={question.questionId} className="question">
                                    <div className="question_container">
                                        {submitted && <Ticked con={answer[question.questionId].verdict} />}
                                        <p className='question-list-p'>{val + 1}. {question.question} *</p>
                                    </div>

                                    <div className="options">
                                        {Object.entries(question.options).map(([optionKey, optionValue]) => (
                                            <div className='outer-quiz_label' key={optionKey}>
                                                <div className="quiz-label">
                                                    <input
                                                        type="radio"
                                                        name={`question${question.questionId}`}
                                                        value={optionKey}
                                                        checked={selectedOptions[question.questionId] === optionKey}
                                                        onChange={() => handleOptionChange(question.questionId, optionKey)}
                                                    />
                                                    {optionValue}
                                                </div>

                                                {submitted && <Reason option={answer[question.questionId][optionKey]} />}
                                            </div>
                                            // <label className='quiz_label' key={optionKey}>
                                            //     <input
                                            //         type="radio"
                                            //         name={`question${question.questionId}`}
                                            //         value={optionKey}
                                            //         checked={selectedOptions[question.questionId] === optionKey}
                                            //         onChange={() => handleOptionChange(question.questionId, optionKey)}
                                            //     />
                                            //     {optionValue}
                                            //     {submitted && <Reason option={answer[question.questionId][optionKey]} />}
                                            // </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='questionnaire-container-btn' onClick={handleSubmit}>Grade Quiz</button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Quiz


