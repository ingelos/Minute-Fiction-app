import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import AsideMenu from "../../components/asideMenu/AsideMenu.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import AuthenticateCheck from "../../components/authenticateCheck/AuthenticateCheck.jsx";
import AuthorProfileForm from "../../components/authorProfileForm/AuthorProfileForm.jsx";

function CreateAuthorProfilePage() {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    async function handleCreateProfile(authorProfileData) {
        const token = localStorage.getItem('token');

        try {
            const {data} = await axios.post(`http://localhost:8080/authorprofiles/${user.username}`,
                authorProfileData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Profile created successfully', data);
            navigate(`/authors/${user.username}`);
        } catch (error) {
            console.error('Error creating profile ', error);
        }
    }

    return (
        <section className='create-profile-section outer-content-container'>
            <div className='create-profile-section inner-content-container'>
                <div className='main-container'>
                    <div className="featured-section">
                        <h2 className='create-profile titles'>Create Author Profile</h2>
                        <AuthenticateCheck>
                            <AuthorProfileForm onSubmit={handleCreateProfile} isEditing={false}/>
                        </AuthenticateCheck>
                    </div>
                    <AsideMenu/>
                </div>
            </div>
        </section>
    )

}

export default CreateAuthorProfilePage;