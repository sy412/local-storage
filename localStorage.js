let allMemo = JSON.parse(localStorage.getItem("allMemo")); //getItem() :키에 해당하는 값 호출.저장된 값을 조회/문자열인 것을 파싱해서 가져옴옴
allMemo = allMemo ?? [];
render();

function saveNote() {
  const content = document.getElementById("content").value;

  allMemo.push({ content, len: allMemo.length }); //length : 저장된 항목의 개수

  localStorage.setItem("allMemo", JSON.stringify(allMemo)); //setItem(key,value) 키-값 쌍 저장 (문자열로 변환해서 저장)
  render();
}

function render() {
  const display = document.getElementById("display");
  display.innerHTML = "";

  for (const item of allMemo) {
    const saveContent = document.createElement("p");
    const saveId = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const today = new Date();
    const date = today.toDateString();
    const color = document.body.style.backgroundColor;

    saveContent.textContent = item.content;
    saveId.textContent = date;
    deleteBtn.textContent = "x";
    deleteBtn.setAttribute("id", item.len);
    deleteBtn.setAttribute("onclick", "remove()");

    display.appendChild(saveId);
    display.appendChild(saveContent);
    display.appendChild(deleteBtn);
  }
}

function remove() {
  const idx = allMemo.find((item) => item.len == event.srcElement.id);
  if (idx) {
    allMemo.splice(
      allMemo.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}
