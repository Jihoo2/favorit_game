// 게임 버튼을 눌렀을 때 실행되는 함수
function showGame(gameName) {

  // 메인 화면을 숨긴다.
  const mainScreen = document.querySelector("#main-screen");
  mainScreen.style.display = "none";

  // 모든 게임 화면을 찾는다.
  const gameScreens = document.querySelectorAll(".game-screen");

  // 모든 게임 화면을 숨긴다.
  for (let i = 0; i < gameScreens.length; i++) {
    gameScreens[i].style.display = "none";
  }

  // 클릭한 게임 화면만 보여준다.
  const selectedGame = document.querySelector("#" + gameName);
  selectedGame.style.display = "block";

  // 화면을 맨 위로 이동한다.
  window.scrollTo(0, 0);
}


// 게임 선택 화면으로 돌아가는 함수
function goHome() {

  // 메인 화면을 보여준다.
  const mainScreen = document.querySelector("#main-screen");
  mainScreen.style.display = "block";

  // 게임 상세 화면을 숨긴다.
  const gameScreens = document.querySelectorAll(".game-screen");

  for (let i = 0; i < gameScreens.length; i++) {
    gameScreens[i].style.display = "none";
  }

  // 화면을 맨 위로 이동한다.
  window.scrollTo(0, 0);
}
