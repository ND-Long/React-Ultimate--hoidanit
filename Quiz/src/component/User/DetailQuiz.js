import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDataQuizById, postSubmitQuiz } from "../services/apiService"
import _ from 'lodash';
import "./DetailQuiz.css"
import { useLocation } from "react-router-dom";
import Question from "./Question";
import ModalSubmitQuiz from "./ModalSubmitQuiz";
import { Toast } from "bootstrap";
import { toast } from "react-toastify";
const DetailtQuiz = (props) => {
    const [quizDatas, setQuizDatas] = useState([])
    const [index, setIndex] = useState(0)
    const [clickPrev, setClickPrev] = useState(false)
    const [clickNext, setClickNext] = useState(false)
    const [showModalSubmit, setShowModalSubmit] = useState(false)
    const [dataSubmit, setDataSubmit] = useState({})
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

    const handleFinish = async () => {
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
        const payload = {
            quizId: +params.id,
            answers: []
        }
        let answers = []
        if (quizDatas && quizDatas.length > 0) {
            quizDatas.forEach(question => {
                let questionId = question.questionId
                let userAnswerId = []
                question.answers.map(answer => {
                    if (answer.isSelected == true) {
                        userAnswerId.push(answer.id)
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })
        }
        payload.answers = answers
        var dataSubmitQuiz = await postSubmitQuiz(payload)

        if (dataSubmitQuiz && dataSubmitQuiz.EC == 0) {

            setDataSubmit({
                countCorrect: dataSubmitQuiz.DT.countCorrect,
                countTotal: dataSubmitQuiz.DT.countTotal,
                quizDatas: dataSubmitQuiz.DT.quizDatas
            })
            setShowModalSubmit(true)
        } else {
            toast.error("Something wrongs...")
        }
    }

    return (
        <>
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
            <ModalSubmitQuiz
                show={showModalSubmit}
                setShow={setShowModalSubmit}
                dataSubmitQuiz={dataSubmit}
            />
        </>
    )
}

export default DetailtQuiz