string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));
