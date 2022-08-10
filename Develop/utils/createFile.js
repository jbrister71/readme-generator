const fs = require("fs");

const writeFile = function(fileName, markdown) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/' + fileName, markdown, err => {
            if(err) {
                reject(err);

                return;
            }

            resolve({
                ok: true,
                message: "README.md created!"
            });
        });
    });
};

module.exports = { writeFile };