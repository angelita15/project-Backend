const { Schema, model } = require("mongoose")


const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50,
            trim: true,
        },

        date: {
            type: Date,
            required: true,
        },

        address : {
            street: {
                streetName : {
                type: String,
                required: true
                },

                streetNumber :  Number,
        
            },

            postCode:  Number,

            city: String ,

            location: {
                type: {
                    type: String,
                },
                coordinates: { 
                type:[Number],
                required: true
                }
            },
        },


        description: {
            type: String,
            maxlength: 300,
            trim: true
        },

        image: String,

        participants: [{
            type: Schema.Types.ObjectId,
            ref: 'User', //user role
        }],

        // comments: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Comment',
        // }],

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User', //Partner role
        }
    },
    {
        timestamps: true,
    }
);

eventSchema.index({ location: "2dsphere" })
const Event = model("Event", eventSchema)

module.exports = Event