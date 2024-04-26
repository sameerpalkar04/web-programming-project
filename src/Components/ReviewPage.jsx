
import "./ReviewPage.css";

export default function ReviewPage({reviews, visible, setVisible}) {
    return <div>
        {visible}
        <div className="review-container">
            <div className="inner-container">
            <h2 id="title">Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} className="review">
                    <h3>{review.name}</h3>
                    <p>{review.reviewText}</p>
                    <p>Rating : {review.rating}/5</p>
                    <p>Review : {review.review}</p>
                </div>
            ))}
            <button id="button1" onClick={() => setVisible(false)}>Close</button>
            </div>
        </div>
    </div>
}