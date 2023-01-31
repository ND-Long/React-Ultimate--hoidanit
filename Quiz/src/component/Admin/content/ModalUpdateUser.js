import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from "lodash"

function ModalUpdateUser(props) {
    const { show, onClickClose, inforUserUpdate } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(inforUserUpdate)) {
            setEmail(inforUserUpdate.email);
            setPassword(inforUserUpdate.password);
            setUsername(inforUserUpdate.username);
            setRole(inforUserUpdate.role);
            if (inforUserUpdate.image) {
                setImage(`data:image/png;base64,${inforUserUpdate.image}`)
            }

        }

    }, [inforUserUpdate])


    //clode modal
    const handleClose = () => {
        onClickClose()
    }

    //up preview image
    const handleUpImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
            console.log(">>>Image: ", image)
        } else {
            setPreviewImage("")
            setImage('')
        }
    }

    //submit user
    const handleUpdatestUser = async () => {
        console.log("Submit Update")
        //validate
        // var isValidateEmail = email.toLowerCase().match(
        //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // );
        // var isValidatePassword = password.match(
        //     /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        // );

        // var isValidateUsername = username.match(/^([a-zA-Z0-9]|[-._](?![-._])){4,20}$/)
        // var imageCheckType = document.getElementById('upload-image').value

        // var typeImage = imageCheckType.substring(
        //     imageCheckType.lastIndexOf('.') + 1).toLowerCase();
        // var isValidateImage

        // if (!isValidateEmail) {
        //     toast.error("Invalid Email")
        //     isValidateEmail = false
        // } else {
        //     isValidateEmail = true
        // }

        // if (!isValidatePassword) {
        //     toast.error("Invalid Password")
        //     isValidatePassword = false
        // } else {
        //     isValidatePassword = true
        // }

        // if (!isValidateUsername) {
        //     toast.error("Invalid Username")
        //     isValidateUsername = false
        // } else {
        //     isValidateUsername = true
        // }

        // if (typeImage == "gif" || typeImage == "png" || typeImage == "bmp"
        //     || typeImage == "jpeg" || typeImage == "jpg" || typeImage == "jpeg") {
        //     isValidateImage = true
        // } else {
        //     toast.error("Invalid Image")
        //     isValidateImage = false
        // }



        // //call apis
        // if (isValidateEmail == true && isValidatePassword == true && isValidateUsername == true && isValidateImage == true) {
        //     var data = await postCreateUser(email, password, username, role, image)
        //     console.log(">>>Check data create:", data)
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
                    <Modal.Title>Update User: ID({inforUserUpdate.id})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row" id='form'>

                            <div className="col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" placeholder="Email"
                                    value={email}
                                    disabled
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label >Password</label>
                                <input type="password" className="form-control" placeholder="******"
                                    value={password}
                                    disabled
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
                                {inforUserUpdate ?
                                    < img className='image-preview' src={image} />
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
                        onClick={() => handleUpdatestUser()}
                    >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser




