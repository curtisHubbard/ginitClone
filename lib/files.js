//basic file management

// * Get the current directory (to get default repo name)
// * Check wether a directory exists (to determine whether the current folder is already a Git repo by looking for a folder named .git)
const fs = require("fs");
const path = require("path");

module.exports = {
    getCurrentDirectoryBase: ()=>{
        //get the current working directory.
        return path.basename(process.cwd());
    },
    directoryExists: (filePath)=>{
        //boolean see if file path exists
        return fs.existsSync(filePath);
    }
};
