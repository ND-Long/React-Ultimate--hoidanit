
import React, { useState } from 'react'
import Select from 'react-select'
import "./Question.css"
import { FiMinusCircle, FiPlusCircle, FiPlusSquare, FiPlus, FiMinus, FiMinusSquare } from 'react-icons/fi';
import { RiImageAddFill } from 'react-icons/ri';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { BsFillPatchPlusFill, BsPatchMinusFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash"

const ManageQuestion = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const [selectQuiz, setSelectQuiz] = useState({})
    const [questions, setQuestions] = useState(
        [
            {
                id: uuidv4(),
                description: "question 1",
                imageFile: "",
                imageName: "",
                answers: [
                    {
                        id: uuidv4(),
                        description: "answer 1",
                        isCorrect: false
                    }
                ]
            }
        ]
    )

    const handleAddRemoveQuestion = (type, idQuestion) => {
        let cloneQuestions = _.cloneDeep(questions)
        if (type == "ADD") {
            const newQuestion = {
                id: uuidv4(),
                description: "question 1",
                imageFile: "",
                imageName: "",
                answers: [
                    {
                        id: uuidv4(),
                        description: "answer 1",
                        isCorrect: false
                    }
                ]
            }
            cloneQuestions.push(newQuestion)
            setQuestions(cloneQuestions)
        }
        if (type == "REMOVE") {
            cloneQuestions = cloneQuestions.filter(item => item.id !== idQuestion)
            setQuestions(cloneQuestions)
        }
    }

    const handleAddRemoveAnswer = (type, idQuestion, idAnswer) => {
        let cloneQuestions = _.cloneDeep(questions)
        if (type == "ADD") {
            const newAnswer = {
                id: uuidv4(),
                description: "answer 1",
                isCorrect: false
            }
            let index = cloneQuestions.findIndex(item => item.id == idQuestion)
            cloneQuestions[index].answers.push(newAnswer)
            setQuestions(cloneQuestions)
        }
        if (type == "REMOVE") {
            let index = cloneQuestions.findIndex(item => item.id == idQuestion)
            let answerDelete = cloneQuestions[index].answers.filter(item => item.id !== idAnswer)
            console.log(answerDelete)

            cloneQuestions[index].answers = answerDelete
            setQuestions(cloneQuestions)
        }
    }



    return (
        <div className="managerPage question">
            <h4>Manage Question</h4>
            <hr />
            <div className='select-question col-md-6'>
                <label>Select Quiz:</label>
                <Select options={options} />
            </div>

            {/* add new question */}
            <label>Add question:</label>
            {
                questions.map((question, index) => {
                    return (
                        <div key={question.id} className="add-question-answer">
                            <div className='add-question'>
                                <div className='icon-list-question' > <VscDebugBreakpointData /></div>
                                <div className="form-floating col-md-6 ">
                                    <input type="text" className="form-control" placeholder="Question's Description" required
                                        value={`Question ${index + 1}`}
                                    />
                                    <label>Question {index + 1}</label>
                                </div>
                                <div className="mx-4">
                                    <label htmlFor="upload-image-question" className='btn-upload-image-question'> <RiImageAddFill /></label>
                                    <input type="file" className="form-control" hidden id="upload-image-question" placeholder="Username" />
                                    <span className='mx-2'>0 file id uploaded</span>
                                    <BsFillPatchPlusFill className='iconPlusQuestion mx-2'
                                        onClick={() => handleAddRemoveQuestion("ADD", question.id)}
                                    />
                                    {
                                        questions.length > 1 &&
                                        <BsPatchMinusFill className='iconMinusQuestion mx-2'
                                            onClick={() => handleAddRemoveQuestion("REMOVE", question.id)}
                                        />
                                    }
                                </div>
                            </div>
                            {
                                question.answers.map((answer, index) => {
                                    return (
                                        <div className='add-new-answer mx-5' key={answer.id}>
                                            <input type="checkbox" className='form-check-input mt-3 mx-3' />
                                            <div className="form-floating mt-3 col-md-6 ">
                                                <input type="text" className="form-control" placeholder="Answer" required
                                                />
                                                <label>Answer {index + 1}</label>
                                            </div>
                                            <div>
                                                <FiPlusCircle className='iconPlusAnswer mx-2'
                                                    onClick={() => handleAddRemoveAnswer("ADD", question.id)}
                                                />
                                                <FiMinusCircle className='iconMinusAnswer mx-2'
                                                    onClick={() => handleAddRemoveAnswer("REMOVE", question.id, answer.id)}

                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }





        </div >
    )
}

export default ManageQuestion