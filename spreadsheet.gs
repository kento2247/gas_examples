const sheetId = "スプレッドシートのID （共有URLの末尾から確認）";
const data_sheet = SpreadsheetApp.openById(sheetId).getSheetByName("スプレッドシートのタブ名");
// const statistics_sheet = SpreadsheetApp.openById(sheetId).getSheetByName("スプレッドシートのタブ名");  //複数タブを参照することもできる

/* 
  SpreadsheetApp.openById("スプレッドシートのID").getSheetByName("スプレッドシートのタブ名").getRange("データの範囲").getValues();
  でスプレッドシート上のデータを取得できる。
・使用には以下の３つの情報が必須
      1. スプレッドシートのID
      2. スプレッドシート内でのタブ名
      3. データの範囲
        ＜指定方法＞
          1. A1:B6のようにコロンで区切る
          2. (始点行, 始点列, 行数, 列数)
            列名のA=1, B=2, ...というようにアルファベットを数字にしてください
        の二通りが存在
 ・書き換えは最後の .getValues() を .setValues([二次元配列]) にすればいい
   . .setValues([二次元配列]) の二次元配列とは、書き込むデータのことであり、 getRange() で指定した行列の大きさと一致していないといけない
   ・ .getRange(x,y,1,10) のように一次元の情報の場合も、[一次元配列]のように、更に[ ]で括って2次元配列にする必要がある（36, 39行目参照）
*/


function get_Values() {
  return data_sheet.getRange("C2:D2").getValues();
//   return data_sheet.getRange(3, 2, 2, 1).getValues();  //上と同じ
}

function get_saveData() {
  const saveRange = data_sheet.getRange(3, 2, 2, 1);  //3行目2列目から 縦2行、横1列分
  saveRange.setValues([1, 2, 3]);
}

function save_result(newRow) { 
  const nowTime = new Date();
  const logString = `last update was executed at ${nowTime}\nsaved in row ${newRow}`;
  let result = [
    false, nowTime, logString
  ]
  const saveRange = data_sheet.getRange(2, 3, 1, result.length);  //2行目3列目から 縦1行、横3列分
  saveRange.setValues([result]);
}
