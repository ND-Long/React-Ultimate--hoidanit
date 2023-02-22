const RightConent = (props) => {
    const { quizDatas } = props
    console.log(quizDatas)

    const handleClickQuestion = (event) => {
        console.log(event)
    }
    return (
        <div>
            <div className="countdown-header text-center" ><b>10:10</b></div>
            <div className="countdown-content mt-3">
                {
                    quizDatas.map((item, index) => {
                        return (
                            <div>
                                <div className="countdown-question"
                                    onClick={() => handleClickQuestion(item)}
                                >{index + 1}</div>
                            </div>
                        )
                    })
                }
                {/* <div className="countdown-question">1</div>
                <div className="countdown-question">2</div>
                <div className="countdown-question">3</div>
                <div className="countdown-question">4</div>
                <div className="countdown-question">5</div>
                <div className="countdown-question">6</div>
                <div className="countdown-question">7</div>
                <div className="countdown-question">8</div>
                <div className="countdown-question">9</div>
                <div className="countdown-question">10</div> */}

            </div>
        </div>
    )
}

export default RightConent