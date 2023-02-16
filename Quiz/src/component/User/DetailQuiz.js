import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDataQuizById } from "../services/apiService"
import _ from 'lodash';
import "./DetailQuiz.css"
import { useLocation } from "react-router-dom";
import Question from "./Question";
const DetailtQuiz = (props) => {
    const [quizDatas, setQuizDatas] = useState([])
    const [index, setIndex] = useState(0)
    const [clickPrev, setClickPrev] = useState(false)
    const [clickNext, setClickNext] = useState(false)
    const questions = []
    const params = useParams()
    const location = useLocation()
    useEffect(() => {
        getQuiz()
    }, [params])



    const handlePrev = () => {
        if (index <= 0) return;
        setIndex(index - 1)
    }
    const handleNext = () => {
        if (index + 1 < quizDatas.length) {
            setIndex(index + 1)
        }
    }


    const getQuiz = async () => {
        const res = await getDataQuizById(params.id)
        if (res && res.EC === 0) {
            let data = _.chain(res.DT)
                // Group the elements of Array based on `id` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = []
                    let questionDescription, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;

                        }
                        item.answers.isSelected = false
                        answers.push(item.answers)
                    })
                    return {
                        questionId: key,
                        answers,
                        image,
                        questionDescription,
                    }
                })
                .value()
            setQuizDatas(data)
        }
    }

    const handleCheckBox = (answerId, questionId) => {
        const quizDatasClone = _.cloneDeep(quizDatas)
        const question = quizDatasClone.find(item => +item.questionId === +questionId)
        if (question) {
            let answerCheckbox = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected
                }
                return item
            })
            question.answers = answerCheckbox
            let index = quizDatasClone.findIndex(item => +item.questionId === +questionId)
            if (index > -1) {
                quizDatasClone[index] = question
                setQuizDatas(quizDatasClone)
            }
        }
    }

    const handleFinish = () => {
        // {
        //     "quizId": 1,
        //     "answers": [
        //         { 
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         { 
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }
        let payload = {
            quizId: +params.id,
            answers: []
        };

        let answers = [];

        if (quizDatas && quizDatas.length > 0) {
            quizDatas.forEach(item => {
                let questionId = item.questionId
                let userAnswerId = []

                item.answers.map(item => {
                    if (item.isSelected == true) {
                        userAnswerId.push(item.id)
                    }
                })
                answers.push({
                    questionId: questionId,
                    userAnswerId: userAnswerId
                })
            })
        }
        console.log(answers)
        payload.answers = answers
        console.log(payload)
    }

    return (
        <div className="question-container">
            <div className="question-body">
                <div className="question-header">
                    Quiz {params.id}: {location?.state}
                </div>

                <hr />

                <div className="question-content">
                    <Question
                        dataQuiz={quizDatas && quizDatas.length > 0 ?
                            quizDatas[index]
                            :
                            []
                        }
                        questionId={index}
                        answers={quizDatas[index]}
                        onClickCheckbox={handleCheckBox}
                    />
                </div>

                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => handlePrev()}
                        disabled={clickPrev}
                    >Prev</button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleNext()}
                        disabled={clickNext}
                    >Next</button>
                    <button
                        className="btn btn-warning"
                        onClick={() => handleFinish()}
                    >Finish</button>
                </div>
            </div>
            <div className="countdown">
                countdown
            </div>
        </div >
    )
}

export default DetailtQuiz