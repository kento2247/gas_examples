function doPost(e) {
  const post_json = JSON.parse(e.postData.getDataAsString());
  const reply_token = post_json.events[0].replyToken;
  const type = post_json.events[0].type;
  const userID = post_json.events[0].source.userId;
  const groupID = post_json.events[0].source.groupId;

  if (typeof reply_token === 'undefined') {
    console.log("token undefined");
    return ContentService.createTextOutput(JSON.stringify({ 'content': 'post error' }));
  }
  if (type === "message") {
    const message = post_json.events[0].message.text;
    //オウム返し的な
    const reply_message = `receive message : ${message}`;
    reply_send(reply_message, reply_token);
  }
  return ContentService.createTextOutput(JSON.stringify({ 'content': 'post ok' })).setMimeType(ContentService.MimeType.JSON);
}
