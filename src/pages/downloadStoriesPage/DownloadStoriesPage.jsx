import "./DownloadStoriesPage.css";
import OwnerCheck from "../../helpers/ownerCheck/OwnerCheck.jsx";
import {useContext, useState} from "react";
import AuthContext from "../../context/AuthContext.jsx";
import axios from "axios";
import Button from "../../components/button/Button.jsx";

function DownloadStoriesPage() {
    const { user } = useContext(AuthContext);
    const [filter, setFilter] = useState('all');

    async function downloadStories() {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get(`http://localhost:8080/authorprofiles/${user.username}/stories/download`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {filter},
                responseType: 'blob',
            });

            const file = new Blob([response.data], { type: 'application/pdf'});
            const url = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = url;
            link.download = `stories-${filter}.pdf`;
            link.click();
            URL.revokeObjectURL(url);

            console.log("Pdf downloaded successfully")
        } catch (error) {
            console.error('Error downloading stories:', error);
        }
    }

    async function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    return (
        <section className='download-stories-section outer-content-container'>
            <div className='download-stories-section inner-content-container'>
                <div className='main-container'>
                    <div className="featured-section">
                        <OwnerCheck username={user.username}>
                            <h2 className="download-title titles">Download Your Stories</h2>
                            <div className="filter-container">
                                <label>
                                    <input
                                        type="radio"
                                        name="filter"
                                        value="all"
                                        checked={filter === 'all'}
                                        onChange={handleFilterChange}
                                    />
                                    All stories
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="filter"
                                        value="published"
                                        checked={filter === 'published'}
                                        onChange={handleFilterChange}
                                    />
                                    Published stories
                                </label>
                            </div>
                            <div className="download-container">
                                <Button
                                    buttonType="button"
                                    buttonText="Download"
                                    className="submit"
                                    onClick={downloadStories}
                                />
                            </div>
                        </OwnerCheck>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default DownloadStoriesPage;