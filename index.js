// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
  return function applyAdjective(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const Calculator = {
  add: function (a = 1, b = 3) {
    return a + b;
  },
  subtract: function (a = 1, b = 3) {
    return a - b;
  },
  multiply: function (a = 1, b = 3) {
    return a * b;
  },
  divide: function (a = 10, b = 5) {
    return a / b;
  },
};

function actionApplyer(start, funcs) {
  if (funcs.length === 0) {
    return start;
  } else {
    let out = start;
    for (const i in funcs) {
      out = funcs[i](out);
    }
    return out;
  }
}
