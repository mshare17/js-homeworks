function isHtml(string = '') {
    let extReverse = '';
    let ext = '';

    for (let i = string.length - 1; i >= 0; i--) {
       if (string[i] === '.') {
           break;
       }
       extReverse = extReverse + string[i];
    }

    for (let i = extReverse.length - 1; i >= 0; i--) {
        ext = ext + extReverse[i];
    }
    
    if (ext === 'html') {
        return true;
    } else {
        return false;
    }
}

const path = "/.users/.download/index.js" 
 
console.log(isHtml(path)) 