import "./StoryDetailsCard.css";
import {Link} from "react-router-dom";
import {FaCircle, FaLongArrowAltRight} from "react-icons/fa";
import {formatPublishDate} from "../../helpers/dateFormatter.js";


function StoryDetailsCard({
                              username,
                              title,
                              authorFirstname,
                              authorLastname,
                              storyContent,
                              themeName,
                              publishDate,
                              storyId,
                              preview = false
                          }) {
    // const formattedDate = formatPublishDate(publishDate);
    const formattedDate = publishDate ? formatPublishDate(publishDate) : 'Date not available';

    function truncateContent(content, wordLimit = 25) {
        const words = content.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + "..." : content;
    }

    return (
        <div className="story-detail-container">
            <Link to={`/authors/${username}`}>
                <div className="title-author-container">
                    <h2 className="story-title">{title}</h2>
                    <FaCircle className="icon"/>
                    <h2 className="story-author-name">By {authorFirstname} {authorLastname}</h2>
                </div>
            </Link>
            <p className="publish-date">{formattedDate} / Minute Fiction</p>
            <p className="story-content">{preview ? truncateContent(storyContent) : storyContent}</p>
            {preview && <p className="story-detail-link"><Link to={`/stories/${storyId}`} className="special-link">
                Continue reading <FaLongArrowAltRight className="arrow-icon"/>
            </Link></p>}
            <div className="story-data">
                <p className="theme-name">Theme: {themeName}</p>
            </div>
        </div>
    )
}

export default StoryDetailsCard;