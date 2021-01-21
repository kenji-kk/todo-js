import "./styles.css";

const onClickAdd = () => {
  //textボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    completeTarget.removeChild(completeButton);
    completeTarget.removeChild(deleteButton);
    returnButton.addEventListener("click", () => {
      completeTarget.removeChild(returnButton);
      document.getElementById("complete-list").removeChild(completeTarget);
      completeTarget.appendChild(completeButton);
      completeTarget.appendChild(deleteButton);
      document.getElementById("incomplete-list").appendChild(completeTarget);
    });
    completeTarget.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
