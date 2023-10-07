import { useState } from 'react'
import '../../components/Quiz/assets/Quiz.css';
import Header from '../StudentPage/StudentHeader';
import Footer from '../StudentPage/Footer';

const Quiz = () => {

    const questions = [
        {
            id: 1,
            questionText: 'What is the chemical symbol for oxygen?',
            options: ['O', 'O2', 'O3', 'Ox'],
        },
        {
            id: 2,
            questionText: 'Which gas is known as laughing gas?',
            options: ['Oxygen', 'Nitrogen', 'Nitrous oxide', 'Carbon dioxide'],
        },
        {
            id: 3,
            questionText: 'What is the atomic number of carbon?',
            options: ['6', '12', '14', '16'],
        },
        {
            id: 4,
            questionText: 'Which element is the most abundant in the Earth\'s crust?',
            options: ['Oxygen', 'Silicon', 'Carbon', 'Aluminum'],
        },
        {
            id: 5,
            questionText: 'What is the chemical formula for water?',
            options: ['H2O2', 'H2O', 'HO', 'H3O'],
        },
        {
            id: 6,
            questionText: 'What is the process of converting a solid directly into a gas called?',
            options: ['Melting', 'Vaporization', 'Sublimation', 'Evaporation'],
        },
        {
            id: 7,
            questionText: 'Which gas is responsible for the greenhouse effect?',
            options: ['Oxygen', 'Methane', 'Nitrogen', 'Carbon dioxide'],
        },
        {
            id: 8,
            questionText: 'What is the chemical name for table salt?',
            options: ['Sodium chloride', 'Potassium chloride', 'Calcium chloride', 'Magnesium chloride'],
        },
        {
            id: 9,
            questionText: 'What is the pH value of a neutral solution?',
            options: ['0', '7', '14', '1'],
        },
        {
            id: 10,
            questionText: 'Which gas gives soda its fizz?',
            options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        },

    ];


    const [selectedOptions, setSelectedOptions] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleOptionChange = (questionId, option) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [questionId]: option,
        }));
    };

    const handleSubmit = () => {
        console.log(selectedOptions);
        setSubmitted(true);
    };

    return (
        <div className="quiz_body">

            <Header />

            <div className='quiz-container'>
                <div className="Quiz-innercontainer">
                    <p >Multiple Choice Quiz</p>
                </div>
                <div className="quiz-pdf">
                    <div className="questionnaire-container">
                        <h2 className='Quiz-header'>Below attempt the 10 question quiz. Good Luck!</h2>
                        <div className="question-list">
                            {questions.map((question) => (
                                <div key={question.id} className="question">
                                    <p className='question-list-p'>{question.id} {question.questionText} *</p>
                                    <div className="options">
                                        {question.options.map((option) => (
                                            <label className='label' key={option}>
                                                <input
                                                    type="radio"
                                                    name={`question${question.id}`}
                                                    value={option}
                                                    checked={selectedOptions[question.id] === option}
                                                    onChange={() => handleOptionChange(question.id, option)}
                                                />
                                                {option}
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


