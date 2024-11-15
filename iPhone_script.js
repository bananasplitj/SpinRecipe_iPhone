// 클릭 시 글씨체를 굵게 바꾸는 함수
function toggleBold(element) {
  element.classList.toggle("bold"); // 클래스 추가/제거
}

// 팝업 열기 함수
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex"; // 팝업 표시
}

// 팝업 닫기 함수
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // 팝업 숨기기
}
