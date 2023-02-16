import { queries } from "@testing-library/react"
import _ from "lodash"
const Question = (props) => {
    const { dataQuiz, questionId, onClickCheckbox } = props

    //check data empty
    if (_.isEmpty(dataQuiz)) {
        return <></>
    }

    const handleCheckBox = (event, answerId, questionId) => {
        // console.log("data props:", dataQuiz.answers)
        onClickCheckbox(answerId, questionId)
    }
    return (
        <>
            <div className="question-image">
                {
                    dataQuiz.image ?
                        <img src={`data:image/png;base64, ${dataQuiz.image}`} />
                        : <div className="no-image"></div>
                }
            </div>
            <div className="question-question">Question {questionId + 1}: {dataQuiz.questionDescription} ?</div>
            <div className="question-answer">
                {
                    dataQuiz.answers.map((a, index) => (
                        <div key={`question - ${index}`} className="a-child">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                                    <input className="form-check-input" type="checkbox" id={`flexCheckDefault-${index}`}
                                        onChange={event => handleCheckBox(event, a.id, dataQuiz.questionId)}
                                        checked={a.isSelected}
                                    />
                                    {a.description}
                                </label>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Question