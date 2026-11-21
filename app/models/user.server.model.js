// Princess Ellis
// 2.4 Performance Assessment - Extending Mongoose Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Add http:// to website addresses when needed
function formatWebsite(url) {
    if (!url) {
        return url;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return 'http://' + url;
    }

    return url;
}

// Create the User schema
const UserSchema = new Schema({
    firstName: String,

    lastName: String,

    email: String,

    username: {
        type: String,
        trim: true
    },

    password: String,

    created: {
        type: Date,
        default: Date.now
    },

    website: {
        type: String,
        set: formatWebsite,
        get: formatWebsite
    }
});

// Create a virtual full name
UserSchema.virtual('fullName')
    .get(function() {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function(fullName) {
        const splitName = fullName.split(' ');

        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    });

// Include getters and virtual fields in JSON
UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Register the User model
mongoose.model('User', UserSchema);