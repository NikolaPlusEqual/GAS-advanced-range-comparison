function testFunction(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = ss.getSheetByName("Sheet1");
  var ss2 = ss.getSheetByName("Sheet2");
  var rng1 = ss1.getRange(1,1,ss1.getLastRow(),3).getValues();
  var rng2 = ss2.getRange(1,1,ss1.getLastRow(),5).getValues();
  output = findEqualContent(rng1,rng2);
  Logger.log(output);
}
