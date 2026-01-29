const callback = () => {
    console.log("I am callback function");
};

const greet = (name, callback) => {
    console.log(name);
    callback();
};

greet("Pw Skill", callback);
