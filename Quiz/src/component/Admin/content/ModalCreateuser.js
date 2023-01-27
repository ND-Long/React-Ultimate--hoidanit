import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Content.css"
import { postCreateUser } from '../../services/apiService';

function ModalCreateuser(props) {
    const { show, onClickClose } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')


    const handleClose = () => {
        onClickClose()
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setPreviewImage('')
        setImage('')
    }


    const handleUpImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            setPreviewImage("")
            setImage('')
        }
    }


    const handleSubmitUser = async () => {
        //validate
        var isValidateEmail = email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        var isValidatePassword = password.match(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        );

        var isValidateUsername = username.match(/^([a-zA-Z0-9]|[-._](?![-._])){4,20}$/)
        var imageCheckType = document.getElementById('upload-image').value

        var typeImage = imageCheckType.substring(
            imageCheckType.lastIndexOf('.') + 1).toLowerCase();
        var isValidateImage

        if (!isValidateEmail) {
            toast.error("Invalid Email")
            isValidateEmail = false
        } else {
            isValidateEmail = true
        }

        if (!isValidatePassword) {
            toast.error("Invalid Password")
            isValidatePassword = false
        } else {
            isValidatePassword = true
        }

        if (!isValidateUsername) {
            toast.error("Invalid Username")
            isValidateUsername = false
        } else {
            isValidateUsername = true
        }

        if (typeImage == "gif" || typeImage == "png" || typeImage == "bmp"
            || typeImage == "jpeg" || typeImage == "jpg" || typeImage == "jpeg") {
            isValidateImage = true
        } else {
            toast.error("Invalid Image")
            isValidateImage = false
        }



        //call apis
        if (isValidateEmail == true && isValidatePassword == true && isValidateUsername == true && isValidateImage == true) {

            try {
                var res = await postCreateUser(email, password, username, role, image)
                if (res.data && res.data.EC == 1) {
                    console.log("Api", res.data)
                    toast.error(res.data.EM)
                }
                if (res.data && res.data.EC == 0) {
                    console.log("Api", res.data)
                    toast.success(res.data.EM)
                    handleClose();
                }
            } catch (error) {
                console.log("API error")
                toast.error("Server Error")
            }


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
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row" id='form'>
                            <div className="col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" placeholder="Email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label >Password</label>
                                <input type="password" className="form-control" placeholder="Password"
                                    value={password}
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




