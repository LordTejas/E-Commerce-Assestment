const ValidRatings = [1, 2, 3, 4, 5];

const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
    }
    return value;
};

const isValidRating = (rating, helpers) => {
    if (!ValidRatings.includes(rating)) {
        return helpers.message('"{{#label}}" must be between 1 and 5');
    }
    return rating;
}

module.exports = {
    objectId,
    isValidRating,
}