
function circleArea(R) {
    const area = (Math.PI*Math.pow(R,2));
    console.log(area);
    return area;
};

function circleCircumference(R) {
    const circumference = (2*Math.PI*R);
    console.log(circumference)
    return circumference;
};



module.exports = {
    circleArea,
    circleCircumference
}