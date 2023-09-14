let buttons = document.querySelectorAll(".social-login-box");

buttons.forEach((button) => {
  let scale = 1; // 초기 크기
  let targetScale = 1; // 목표 크기
  let animationFrameId; // 애니메이션 프레임 ID

  function animate() {
    if (scale !== targetScale) {
      if (scale < targetScale) {
        scale += 0.01; // 확대 애니메이션
      } else {
        scale -= 0.01; // 축소 애니메이션
      }

      button.style.transform = `scale(${scale})`;
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  button.addEventListener("mouseover", function () {
    targetScale = 1.1; // 마우스 오버시 목표 크기 설정
    cancelAnimationFrame(animationFrameId); // 이전 애니메이션 중지
    animate(); // 애니메이션 시작
  });

  button.addEventListener("mouseout", function () {
    targetScale = 1; // 마우스 아웃시 목표 크기 설정
    cancelAnimationFrame(animationFrameId); // 이전 애니메이션 중지
    animate(); // 애니메이션 시작
  });
});
