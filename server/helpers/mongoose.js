module.exports = {
    normalizeErrors: function(errors) { 
        let normalizeErrors = [];

        for (let property in errors) {
            if (errors.hasOwnProperty(key)) {
                normalizeErrors.push({title : property, detail: errors[property].message })
            }
        }
        return normalizeErrors;
    }
}