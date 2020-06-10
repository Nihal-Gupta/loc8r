const moongoose = require('mongoose');

const openingTimeSchema = new moongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new moongoose.Schema({
        author: String,
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5
        },
        reviewText: String,
        createdOn: {
            type: Date,
            default: Date.now
        }
});

const locationSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String
    },
    rating: {
        type:Number,
        'default': 0,
        min:0,
        max :5
    },
    facilities:[String],
    coords:{
        type:String,//error expected try back 
        coordinates:[Number]
    },
    openingTimes:[openingTimeSchema],
    reviews: [reviewSchema]
});
locationSchema.index({
    coords:'2dsphere'
});
moongoose.model('Location', locationSchema);// check if Location should be exat the name of JS file or not