import React, { useEffect, useState } from 'react';
import styles from './Quiz.module.css';
import { useLocation } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: '2+2 нече болот?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '4'
  },
  {
    id: 2,
    question: '5+7 нече болот?',
    options: ['10', '12', '14', '16'],
    correctAnswer: '12'
  },
  {
    id: 3,
    question: '10-3 нече болот?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7'
  },
  {
    id: 4,
    question: '8*4 нече болот?',
    options: ['24', '32', '36', '40'],
    correctAnswer: '32'
  },
  {
    id: 5,
    question: '27/3 нече болот?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '9'
  },
  {
    id: 6,
    question: '6*5-4*3 нече болот?',
    options: ['10', '18', '22', '24'],
    correctAnswer: '18'
  },
  {
    id: 7,
    question: '16-дын кок буруу каалаган болот?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '4'
  },
  {
    id: 8,
    question: '3 4-түн катынычтан дарек жатат?',
    options: ['9', '27', '64', '81'],
    correctAnswer: '81'
  },
  {
    id: 9,
    question: '2*2*2*2*2*2*2*2*2*2 нече болот?',
    options: ['1024', '2048', '4096', '8192'],
    correctAnswer: '1024'
  },
  {
    id: 10,
    question: '9+8-6*4/2 нече болот?',
    options: ['-4', '-3', '4', '11'],
    correctAnswer: '-3'
  },
  {
    id: 11,
    question: '7*3 нече болот?',
    options: ['16', '21', '24', '27'],
    correctAnswer: '21'
  },
  {
    id: 12,
    question: '15-9 нече болот?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6'
  },
  {
    id: 13,
    question: '12/3 нече болот?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4'
  },
  {
    id: 14,
    question: '10*5 нече болот?',
    options: ['35', '40', '45', '50'],
    correctAnswer: '50'
  }
  ];
  

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const location = useLocation()
  const [num,setNum]= useState(0)
  const [choosen,setChoosen]=useState([])
  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };
  useEffect(()=>{
    setCurrentQuestion(Math.floor(Math.random()*14))
  },[location])

  const handleNextQuestionClick = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  
    setSelectedAnswer('');
    if (num < 5) {
      setNum(prev=>{
        setChoosen(chos=>[...chos,prev])
        return prev+1
      })
      let currentRandom = Math.floor(Math.random() * 13) + 1;
      if(currentRandom !== currentQuestion || choosen.includes(num)) {
        if(choosen.includes(num) || currentRandom !== currentQuestion){
          currentRandom = Math.floor(Math.random() * 13) + 1;
          setCurrentQuestion(currentRandom);
          return
          }else {
          currentRandom = Math.floor(Math.random() * 13) + 1;
          setCurrentQuestion(currentRandom);
          return
        }
      }else{
        setCurrentQuestion(currentRandom);
      }
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuizClick = () => {
    setNum(0)
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className={styles.quiz}>
      {showResult ? (
        <div className={styles.result}>
          <h2>Результаты теста</h2>
          <p>Вы ответили правильно на {score} из 5 вопросов</p>
          <button onClick={handleRestartQuizClick}>Начать заново</button>
        </div>
      ) : (
        <div className={styles.question}>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`${styles.option} ${
                  selectedAnswer === option ? styles.selected : ''
                }`}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className={styles.nextButton}
            disabled={!selectedAnswer}
            onClick={handleNextQuestionClick}
          >
            Следующий вопрос
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
