// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "d96779a13ee212c01a8d954fdea1d04a";
$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,

      // dataTypeでは、レスポンスとして取得したいデータの型を指定する。
      // 今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述する。
      dataType : 'jsonp',
    })  });
});