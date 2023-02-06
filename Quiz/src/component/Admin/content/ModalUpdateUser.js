import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Content.css"
import { putUpdateUser } from '../../services/apiService';
import { async } from "q"
import _ from "lodash"

function ModalCreateuser(props) {
    const { show, onClickClose, fetchListUsers, inforUserUpdate, resetDataUpdate, backToPage1 } = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')


    useEffect(() => {
        if (!_.isEmpty(inforUserUpdate)) {
            setEmail(inforUserUpdate.email);
            setPassword(inforUserUpdate.password);
            setUsername(inforUserUpdate.username);
            setRole(inforUserUpdate.role)
            setPreviewImage(`data:image/png;base64, ${inforUserUpdate.image}`)
            // console.log(`data:image/png;base64, ${inforUserUpdate.image}`)
        }
    }, [inforUserUpdate])

    //clode modal
    const handleClose = () => {
        onClickClose();
        setEmail("");
        setPassword("");
        setUsername("");
        setRole('USER');
        setPreviewImage('')
        setImage('')
        resetDataUpdate()
    }

    //up preview image
    const handleUpImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            setPreviewImage("")
            setImage('')
        }
    }

    //update user
    const handleSubmitUser = async () => {
        //validate

        var isValidateUsername = username.match(/^([a-zA-Z0-9]|[-._](?![-._])){4,20}$/)
        var imageCheckType = document.getElementById('upload-image').value

        var typeImage = imageCheckType.substring(
            imageCheckType.lastIndexOf('.') + 1).toLowerCase();
        var isValidateImage


        // if (!isValidateUsername) {
        //     toast.error("Invalid Username")
        //     isValidateUsername = false
        // } else {
        //     isValidateUsername = true
        // }

        if (!previewImage) {
            if (typeImage == "gif" || typeImage == "png" || typeImage == "bmp"
                || typeImage == "jpeg" || typeImage == "jpg" || typeImage == "jpeg") {
                isValidateImage = true
            } else {
                console.log(image)
                toast.error("Invalid Image")
                isValidateImage = false
            }
        } else {
            isValidateImage = true
        }



        //call apis
        // if (isValidateUsername == true && isValidateImage == true) {
        //     var data = await putUpdateUser(inforUserUpdate.id, username, role, image)
        //     // console.log(">>>Check data update:", data)
        //     if (data && data.EC == 1) {
        //         toast.error(data.EM)
        //     } else if (data && data.EC == 0) {
        //         toast.success(data.EM)
        //         handleClose();
        //         fetchListUsers();
        //     } else {
        //         toast.error(data.EM)
        //     }
        // }
        {
            var data = await putUpdateUser(inforUserUpdate.id, username, role, image)
            // console.log(">>>Check data update:", data)

            toast.success("Update succes")
            handleClose();
            fetchListUsers();

        }
    }


    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update User </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row" id='form'>
                            <div className="col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" placeholder="Email"
                                    value={email}
                                    disabled={true}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label >Password</label>
                                <input type="password" className="form-control" placeholder="Password"
                                    value={password}
                                    disabled={true}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Username</label>
                                <input type="text" className="form-control" placeholder="Username"
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label >Role</label>
                                <select className="form-control"
                                    value={role}
                                    onChange={event => setRole(event.target.value)}
                                >
                                    <option >USER</option>
                                    <option>ADMIN</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="upload-image" className='btn-upload-image'>Upload File Image</label>
                                <input type="file" className="form-control" id="upload-image" placeholder="Username" hidden
                                    onChange={event => handleUpImage(event)}
                                />
                            </div>
                            <div className='preview-image'>
                                {previewImage ?
                                    < img className='image-preview' src={previewImage} />
                                    :
                                    <span >Preview Image</span>
                                }


                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => handleSubmitUser()}
                    >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateuser




