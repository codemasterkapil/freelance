import { useState, useEffect } from 'react'
import '../../components/Quiz/assets/Quiz.css';
import Header from '../StudentPage/StudentHeader';
import Footer from '../StudentPage/Footer';
import axios from 'axios';
import Reason from './Reason';
import Ticked from './Ticked';


const Quiz = () => {

    const [questions, setQuestions] = useState([]);
    const [total, setTotal] = useState();
    const [answer, setAnswer] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const get_data = async () => {
            try {
                const response = await axios.get('https://portal-9bua.onrender.com/quizinit');
                setQuestions(response.data.responseObbject.qsets);
                setTotal(response.data.responseObbject.results);
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
        <div className="quiz_body">

            <Header />

            <div className='quiz-container'>
                <div className="Quiz-innercontainer">
                    <p>Multiple Choice Quiz</p>
                </div>
                <div className="quiz-pdf">
                    <div className="questionnaire-container">
                        <h2 className='Quiz-header'>Below attempt the {total} questions quiz. Good Luck!</h2>
                        <div className="question-list">
                            {questions.map((question, val) => (
                                <div key={question.questionId} className="question">
                                    <div className="question_container">
                                        {submitted && <Ticked con={answer[question.questionId].verdict} />}
                                        <p className='question-list-p'>{val + 1}. {question.question} *</p>
                                    </div>
                                   
                                    <div className="options">
                                        {Object.entries(question.options).map(([optionKey, optionValue]) => (
                                            <label className='label' key={optionKey}>
                                                <input
                                                    type="radio"
                                                    name={`question${question.questionId}`}
                                                    value={optionKey}
                                                    checked={selectedOptions[question.questionId] === optionKey}
                                                    onChange={() => handleOptionChange(question.questionId, optionKey)}
                                                />
                                                {optionValue}
                                                {submitted && <Reason option={answer[question.questionId][optionKey]} />}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='questionnaire-container-btn' onClick={handleSubmit}>Grade Quiz</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Quiz


