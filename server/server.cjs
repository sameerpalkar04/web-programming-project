require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const mongourl = process.env.MONGO_URL;
const app = express();
app.use(bodyParser.json());
app.use(cors());

async function dbConnect() {
    await mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected");
}

const port = 4000;

const reviewSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

app.post('/addReview', async (req, res) => {
    try {
        const { restaurantName, name, email, rating, reviewText } = req.body;
        const review = new Review({
            restaurantName,
            name,
            email,
            rating,
            review: reviewText
        });
        await review.save();
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review' });
    }
});

app.listen(port, () => {
    dbConnect();
    console.log(`Server is running on port ${port}`);
});
