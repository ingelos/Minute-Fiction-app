import "./EditEmailPage.css";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import axios from "axios";
import Input from "../../components/input/Input.jsx";
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa";
import {AuthContext} from "../../context/AuthContext.jsx";
import OwnerCheck from "../../components/ownerCheck/OwnerCheck.jsx";

function EditEmailPage() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [error, setError] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);
    const { user } = useContext(AuthContext);

    async function editEmail(formData) {
        setError(false);
        const token = localStorage.getItem('token');

        try {
            const {data} = await axios.patch(`http://localhost:8080/users/${user.username}/email`, {
                email: formData.email,
                currentPassword: formData.currentPassword,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setSubmitSuccess(true);
            console.log(`Account details successfully updated`, data);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }


    return (
        <section className='edit-accountdetails-page outer-content-container'>
            <div className='edit-accountdetails-page inner-content-container'>
                <div className='main-container'>
                    <OwnerCheck>
                    <div className='featured-section'>
                        <h2 className='edit-account-title titles'>Account Settings</h2>
                        <h3>Username: {user.username}</h3>
                        <h4>Current email: {user.email}</h4>
                        {error && <p>{error.message}</p>}
                        {!submitSuccess ?
                            <div>
                                <form className='edit-account-settings-form'
                                      onSubmit={handleSubmit(editEmail)}>
                                    <Input
                                        inputType='email'
                                        inputName='email'
                                        inputId='newEmail-field'
                                        inputLabel='New email: *'
                                        validationRules={{
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Please enter a valid email address',
                                            }
                                        }}
                                        register={register}
                                        errors={errors}
                                    />
                                    <Input
                                        inputType='password'
                                        inputName='currentPassword'
                                        inputId='currentPassword-field'
                                        inputLabel='Current password: *'
                                        validationRules={{
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'A password requires a minimum of 8 characters'
                                            }
                                        }}
                                        register={register}
                                        errors={errors}
                                    />
                                    <button type='submit'>Save</button>
                                </form>
                                <div className='back-link'>
                                    <FaLongArrowAltRight className="arrow-icon"/>
                                    <Link to={`/user/${user.username}`}>Back to account</Link>
                                </div>
                            </div>
                            :
                            <div className='account-settings-succes'>
                                <p>You have successfully updated your email!</p>
                                <div className='back-link'>
                                    <FaLongArrowAltRight className="arrow-icon"/>
                                    <Link to={`/user/${user.username}`}>Back to account</Link>
                                </div>
                            </div>
                        }
                    </div>
                    </OwnerCheck>
                </div>
            </div>
        </section>
    )
}

export default EditEmailPage;