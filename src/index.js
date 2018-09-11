/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
    // your implementation
    let controlArr = [];
    let count = 0;
    for (let i = 0; i < preferences.length; i++) {
        let index1 = preferences[i] - 1; // get an index the lover of Spichonee

        if (index1 === i) continue; // Spichonee loves yourself

        let index2 = preferences[index1] - 1; // get an index the lover of the lover of  Spichonee
        let index3 = preferences[index2] - 1; // get an index the lover of the lover of the lover Spichonee

        if (index3 === i) { // we find a love triangle
            if (controlArr.indexOf(index1) === -1
                && controlArr.indexOf(index2) === -1
                && controlArr.indexOf(index3) === -1) { // check that we did not count this triangle yet

                controlArr.push(index1);
                controlArr.push(index2);
                controlArr.push(index3);

                count++;
            }
        }
    }
    return count;
};
