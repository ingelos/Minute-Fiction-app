import AsideMenu from "../../components/asideMenu/AsideMenu.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Input from "../../components/input/Input.jsx";
import {Link} from "react-router-dom";

function Authenticate() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loginSucces, setLoginSucces] = useState(null);
    const controller = new AbortController();

    useEffect(() => {
        return function cleanup() {
            controller.abort();
        }
    });


    async function handleFormSubmit(formData) {
        setError(false);

        try {
            const {data} = await axios.post('https://localhost:8080/authenticate', {
                username: formData.username,
                password: formData.password,
                signal: controller.signal,
            });
            console.log(data.accessToken);
            login(data.accessToken);

            setLoginSucces(true);

        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('Authentication failed: Invalid username or password');
                setError(true);
            } else {
                console.error('Error:', error.response || error.message || error);
                setError(true);
            }
        }
    }


    return (
        <section className='authenticate-section outer-content-container'>
            <div className='authenticate-section inner-content-container'>
                <div className='main-container'>
                    <div className="featured-section">
                        <h2 className='login-title'>Login</h2>
                        {error && <p>Something went wrong authenticating, please try a</p>}
                        {!loginSucces ?
                            <form className='login-form' onSubmit={handleSubmit(handleFormSubmit)}>
                                <Input
                                    inputType='text'
                                    inputName='username'
                                    inputId='username-field'
                                    inputLabel='Username:'
                                    validationRules={{
                                        required: 'Username is required'
                                    }}
                                    register={register}
                                    errors={errors}
                                />
                                <Input
                                    inputType='password'
                                    inputName='password'
                                    inputId='password-field'
                                    inputLabel='Password:'
                                    validationRules={{
                                        required: 'Password is required',
                                        }
                                    }
                                    register={register}
                                    errors={errors}
                                />
                                <button
                                    type='submit'
                                    className='login-button'
                                >
                                    Login
                                </button>
                            </form>
                            :
                            <>
                                <div className='succes-container'>
                                    <h2>Welcome back!</h2>
                                    <p><Link to={`/authorprofiles/:authorId`}><strong>My Author profile</strong></Link></p>
                                </div>
                            </>
                        }
                    </div>
                    <AsideMenu />
                </div>
            </div>
        </section>
    )
}

export default Authenticate;