function getRectangleArea(width, height) {
  return width * height;
}

const area1 = getRectangleArea(7, 12);
console.log(area1);


const getRectangleAreaExpression = function (width, height) {
  return width * height;
};

const area2 = getRectangleAreaExpression(7, 12);
console.log(area2);


const getRectangleAreaArrow = (width, height) => {
  return width * height;
};

const area3 = getRectangleAreaArrow(7, 12);
console.log(area3);