function doGet(e) {
  //変数eの中にgetリクエスト内のパラメータが格納される（JSON形式？）
  if (e.parameter == undefined) {
    return_message="failed";
  }
  const param = e.parameter.param
  if (param === "hello") {
    console.log("hello world");
    return_message = "param prited";
  }
  return ContentService.createTextOutput(return_message);
  //getリクエスト元には"hello world"のように文字列が返される
}

//getリクエストの仕方。ウェブアプリのURLをデプロイの画面から確認する。以下のようなものがあるはず
//https://script.google.com/macros/s/----/exec
//これの末尾に"?パラメータ名=値"の形式でパラメータを追加。複数の場合は"?パラメータ名=値&パラメータ名=値&パラメータ名=値"のように?は書かず&で繋げていく
//https://script.google.com/macros/s/----/exec?name="taro"&age=18&resion="Asia"　　のような感じ
