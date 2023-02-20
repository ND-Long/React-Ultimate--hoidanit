import "./ManageQuiz.css"
import Accordion from 'react-bootstrap/Accordion';
import { VscDebugBreakpointData, VscMention } from 'react-icons/vsc';
import { BsFillPatchPlusFill, BsPatchMinusFill } from 'react-icons/bs';
import { FiMinusCircle, FiPlusCircle, FiPlusSquare, FiPlus, FiMinus, FiMinusSquare } from 'react-icons/fi';
import { RiImageAddFill } from 'react-icons/ri';
import Select from 'react-select'

const QuizQA = (props) => {
    const { listQuizzes } = props

    return (
        <Accordion defaultActiveKey="1" className="mt-2 mb-2">
            <Accordion.Item eventKey="0">
                <Accordion.Header><h5>Update Q/A Quizzes</h5></Accordion.Header>
                <Accordion.Body>
                    <div className='select-question col-md-6'>
                        <label>Select Quiz:</label>
                        <Select
                            options={listQuizzes}
                        // onChange={(event) => setSelectedQuiz(event)}
                        />
                    </div>
                    <div className="add-question-answer">
                        <div className='add-question'>
                            <div className='icon-list-question' > <VscDebugBreakpointData /></div>
                            <div className="form-floating col-md-6 ">
                                <input type="text" className="form-control" placeholder="Question's Description" required

                                />
                                <label>Description question</label>
                            </div>


                            <div className="btn-add-question mx-4">

                                {/* upload File image */}
                                <div className='btn-upload-image-question'>
                                    {/* <label htmlFor={question.id} > <RiImageAddFill htmlFor={question.id} className='btn-upload-image-question' /></label> */}
                                </div>
                                <div>
                                    <input type="file" className="form-control" hidden placeholder="Username"

                                    />
                                </div>

                                {/* image name */}
                                <div>
                                    <span className='image-question-name mx-2'
                                    > 0 file is uploaded</span>
                                    <BsFillPatchPlusFill className='iconPlusQuestion mx-2'

                                    />

                                    <BsPatchMinusFill className='iconMinusQuestion mx-2'
                                    />

                                </div>
                            </div>
                        </div>


                        {/* list answers */}



                        <div className='add-new-answer mx-5' >


                            {/* onchange check box */}
                            <input type="checkbox" className='form-check-input mt-3 mx-3'


                            />

                            {/* onchange answer */}
                            <div className="form-floating mt-3 col-md-6 ">
                                <input type="text" className="form-control" placeholder="Answer"

                                />
                                <label>Answer</label>
                            </div>
                            <div>
                                <FiPlusCircle className='iconPlusAnswer mx-2'
                                />

                                <FiMinusCircle className='iconMinusAnswer mx-2'

                                />

                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success ">Save</button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default QuizQA