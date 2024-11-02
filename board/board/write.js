const submitHandler = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const writer = e.target.writer.value;
    const content = e.target.content.value;
  
    try {
      // boards 가져오기
      const boardsObj = JSON.parse(localStorage.getItem("boards"));
  
      // 객체 추가
      const index = boardsObj.length;
      const instance = new Board(index, subject, writer, content);
      boardsObj.push(instance);
  
      // boards 저장
      const boardsStr = JSON.stringify(boardsObj);
      localStorage.setItem("boards", boardsStr);
      location.href = "C:/Users/SAMSUNG/Documents/Visual Studio 2022/pantan12/board/board/view.html?index=" + index;
    } catch (e) {
      // 예외 발생시 메시지 출력
      alert(e.message);
      console.error(e);
    }
  };
  
  writeFrm.addEventListener("submit", submitHandler);