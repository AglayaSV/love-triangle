/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let controlArr = [];
    let count = 0;
    for(let i = 0; i<preferences.length; i++){

        let index1 = preferences[i] - 1;
        if( index1 === i) continue;

        let index2 = preferences[index1] - 1;

        let index3 = preferences[index2] - 1;
        if (index3 === i){
            if (controlArr.indexOf(index1) === -1 && controlArr.indexOf(index2) === -1 &&controlArr.indexOf(index3) === -1){
                controlArr.push(index1);
                controlArr.push(index2);
                controlArr.push(index3);

                count++;
            }

        }

    }

    return count;

};
