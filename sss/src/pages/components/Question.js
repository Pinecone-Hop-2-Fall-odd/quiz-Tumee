const Answer = (props) => {
    const { quizData,quiz } = props;

    return (
        <div className="">
            <div onClick={quiz}>
                <img src={quizData.quiz[0].img_1} className="button1"></img>
                <p className="quiz_name-1">{quizData.quiz[0].quizData_1}</p>
            </div>
            <div onClick={quiz}>
                <img src={quizData.quiz[0].img_2} className="button2"></img>
                <p className="quiz_name-2">{quizData.quiz[0].quizData_2}</p>
            </div>
        </div>
    )
}