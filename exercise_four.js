var game_cases = ["Rock", "Paper", "Scissor"];

var onLoadPoints = function () {
  reset();
  document.getElementById("me_points").innerHTML = me_points;
  document.getElementById("computer_points").innerHTML = computer_points;
};

var getStates = function () {
  var computer_state =
    game_cases[Math.floor(Math.random() * game_cases.length)];
  document.getElementById("computer_state").innerHTML = computer_state;

  var me_state = document.getElementById("me_state_select").value;
  document.getElementById("me_state").innerHTML = me_state;

  return computer_state, me_state;
};

var gamePointsConditions = function () {
  if (computer_state.innerHTML == me_state.innerHTML) {
  } else if (
    computer_state.innerHTML == "Rock" &&
    me_state.innerHTML == "Paper"
  ) {
    me_points = me_points + 1;
    mainPointsFunction();
  } else if (
    computer_state.innerHTML == "Rock" &&
    me_state.innerHTML == "Scissor"
  ) {
    computer_points = computer_points + 1;
    mainPointsFunction();
  } else if (
    computer_state.innerHTML == "Paper" &&
    me_state.innerHTML == "Rock"
  ) {
    computer_points = computer_points + 1;
    mainPointsFunction();
  } else if (
    computer_state.innerHTML == "Paper" &&
    me_state.innerHTML == "Scissor"
  ) {
    me_points = me_points + 1;
    mainPointsFunction();
  } else if (
    computer_state.innerHTML == "Scissor" &&
    me_state.innerHTML == "Rock"
  ) {
    me_points = me_points + 1;
    mainPointsFunction();
  } else if (
    computer_state.innerHTML == "Scissor" &&
    me_state.innerHTML == "Paper"
  ) {
    computer_points = computer_points + 1;
    mainPointsFunction();
  }

  document.getElementById("me_points").innerHTML = me_points;
  document.getElementById("computer_points").innerHTML = computer_points;

  return computer_points, me_points;
};

var mainPointsFunction = function () {
  if (me_points == max_point) {
    alert("Congratulations! You are the winner!");
    reset();
  } else if (computer_points == max_point) {
    alert("No problem! Wish you win next time!");
    reset();
  } else if (
    computer_points == me_points &&
    (computer_points >= 2) | (me_points >= 2)
  ) {
    max_point = max_point + 1;
  }
  return max_point;
};

var reset = function () {
  computer_state.innerHTML = "";
  computer_points = 0;
  me_points = 0;
  max_point = 3;
};

var start = () => {
  getStates();
  console.log(computer_state.innerHTML, me_state.innerHTML);
  gamePointsConditions();
  console.log(computer_points, me_points, max_point);
};
