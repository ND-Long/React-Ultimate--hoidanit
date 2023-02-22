import CountDown from "./CountDown"

const RightContent = (props) => {
    const { quizDatas, timeOutSubmit } = props

    const handleClickQuestion = (event) => {
        // console.log(event)
    }

    const handleTimeOutSubmit = () => {
        timeOutSubmit()
    }
    return (
        <div>
            <div className="right-content-header text-center" >
                <b>
                    <CountDown
                        timeOutSubmit={handleTimeOutSubmit}
                    />
                </b>
            </div>
            <div className="right-content-content mt-3">
                {
                    quizDatas.map((item, index) => {
                        return (
                            <div>
                                <div className="right-content-question"
                                    onClick={() => handleClickQuestion(item)}
                                >{index + 1}</div>
                            </div>
                        )
                    })
                }
                {/* <div className="right-content-question">1</div>
                <div className="right-content-question">2</div>
                <div className="right-content-question">3</div>
                <div className="right-content-question">4</div>
                <div className="right-content-question">5</div>
                <div className="right-content-question">6</div>
                <div className="right-content-question">7</div>
                <div className="right-content-question">8</div>
                <div className="right-content-question">9</div>
                <div className="right-content-question">10</div> */}

            </div>
        </div>
    )
}

export default RightContent