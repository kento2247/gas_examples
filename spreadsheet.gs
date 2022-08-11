const sheetId = "スプレッドシートのID （共有URLの末尾から確認）";
const data_sheet = SpreadsheetApp.openById(sheetId).getSheetByName("スプレッドシートのタブ名");

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

//始点行, 始点列, 行数, 列数　を引数で渡して、2次元配列で値を取得する
function get_values(start_row, start_column, row, column) {
   return data_sheet.getRange(start_row, start_column, row, column).getValues();
}

//始点行, 始点列、データ（二次元配列）　を引数で渡して、データをセットする
 function set_values(start_row, start_column, data) { 
  const saveRange = data_sheet.getRange(start_row, start_column, data.length, data[0].length);  
  saveRange.setValues(data);
}


//使用例
function ex(){
  console.log(get_values(1, 1, 3, 3)) //シートの左上から3*3のセルを読む
  const data=[[1,1,1,],[2,2,2],[3,3,3]]
  console.log(set_values(1, 1, data)) //シートの左上から3*3のセルにデータをセット
}
