import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";
import RegisterPage from "./pages/registerPage/RegisterPage.jsx";
import ThemesPage from "./pages/themesPage/ThemesPage.jsx";
import ThemePage from "./pages/themePage/ThemePage.jsx";
import SubmitPage from "./pages/submitPage/SubmitPage.jsx";
import StoryDetailsPage from "./pages/storyDetailsPage/StoryDetailsPage.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Header from "./components/header/Header.jsx";
import MainNavigation from "./components/mainNavigation/MainNavigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import AuthorProfilePage from "./pages/authorProfilePage/AuthorProfilePage.jsx";
import AuthenticatePage from "./pages/authenticatePage/AuthenticatePage.jsx";
import EditAccountDetailsPage from "./pages/editAccountDetailsPage/EditAccountDetailsPage.jsx";
import SubmitToThemePage from "./pages/submitToThemePage/SubmitToThemePage.jsx";
import AuthorOverviewPage from "./pages/authorsOverviewPage/AuthorOverviewPage.jsx";
import CreateThemePage from "./pages/createThemePage/CreateThemePage.jsx";
import ManageThemesPage from "./pages/manageThemesPage/ManageThemesPage.jsx";
import EditThemePage from "./pages/editThemePage/EditThemePage.jsx";
import ManageMailings from "./pages/manageMailingsPage/ManageMailingsPage.jsx";
import CreateMailingPage from "./pages/createMailingPage/CreateMailingPage.jsx";
import EditMailingPage from "./pages/editMailingPage/EditMailingPage.jsx";
import ReviewStoriesPage from "./pages/reviewStoriesPage/ReviewStoriesPage.jsx";
import PublishStoriesPage from "./pages/publishStoriesPage/PublishStoriesPage.jsx";
import EditorDashboardPage from "./pages/editorDashboardPage/EditorDashboardPage.jsx";
import SendMailingPage from "./pages/sendMailingPage/SendMailingPage.jsx";
import EditStoryPage from "./pages/editStoryPage/EditStoryPage.jsx";
import ManageStoriesPage from "./pages/manageStoriesPage/ManageStoriesPage.jsx";
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage.jsx";
import ChangePasswordPage from "./pages/changePasswordPage/ChangePasswordPage.jsx";
import DeleteAccountPage from "./pages/deleteAccountPage/DeleteAccountPage.jsx";
import EditProfilePhotoPage from "./pages/editProfilePhotoPage/EditProfilePhotoPage.jsx";
import ManageUsersPage from "./pages/manageUsersPage/ManageUsersPage.jsx";
import AboutPage from "./pages/aboutPage/AboutPage.jsx";
import ManageAuthoritiesPage from "./pages/manageAuthoritiesPage/ManageAuthoritiesPage.jsx";
import CreateAuthorProfilePage from "./pages/createAuthorProfilePage/CreateAuthorProfilePage.jsx";


function App() {

    return (
        <>
            <Header/>
            <MainNavigation/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/authenticate" element={<AuthenticatePage/>}/>

                    <Route path="/user/:username" element={<UserDetailsPage/>}/>
                    <Route path="/user/:username/create-profile" element={<CreateAuthorProfilePage/>}/>
                    <Route path="/user/account/:username/edit" element={<EditAccountDetailsPage/>}/>
                    <Route path="/user/account/:username/change-password" element={<ChangePasswordPage/>}/>
                    <Route path="/user/account/:username/delete" element={<DeleteAccountPage/>}/>


                    <Route path="/authors" element={<AuthorOverviewPage/>}/>
                    <Route path="/authors/:username" element={<AuthorProfilePage/>}/>
                    <Route path="/authors/:username/edit" element={<AuthorProfilePage/>}/>
                    <Route path="/authors/:username/photo" element={<EditProfilePhotoPage/>}/>

                    <Route path="/editor/dashboard" element={<EditorDashboardPage/>}/>
                    <Route path="/editor/stories" element={<ManageStoriesPage/>}/>
                    <Route path="/editor/stories/:storyId/edit" element={<EditStoryPage/>}/>
                    <Route path="/editor/stories/review" element={<ReviewStoriesPage/>}/>
                    <Route path="/editor/stories/publish" element={<PublishStoriesPage/>}/>
                    <Route path="/editor/users" element={<ManageUsersPage/>}/>
                    <Route path="/editor/users/:userId/authorities" element={<ManageAuthoritiesPage/>}/>

                    <Route path="/editor/themes" element={<ManageThemesPage/>}/>
                    <Route path="/editor/themes/new" element={<CreateThemePage/>}/>
                    <Route path="/editor/themes/:themeId/edit" element={<EditThemePage/>}/>

                    <Route path="/editor/mailings" element={<ManageMailings/>}/>
                    <Route path="/editor/mailings/new" element={<CreateMailingPage/>}/>
                    <Route path="/editor/mailings/:mailingId/edit" element={<EditMailingPage/>}/>
                    <Route path="/editor/mailings/:mailingId/send" element={<SendMailingPage/>}/>

                    <Route path="/themes" element={<ThemesPage/>}/>
                    <Route path="/themes/:themeName" element={<ThemePage/>}/>
                    <Route path="/submit" element={<SubmitPage/>}/>
                    <Route path="/submit/:themeId" element={<SubmitToThemePage/>}/>
                    <Route path="/stories/:storyId" element={<StoryDetailsPage/>}/>

                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
