// （API_KEY には、"取得したAPIキー" を記述）
// const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]]; →定数
const API_KEY = "d96779a13ee212c01a8d954fdea1d04a";

$(function(){
  $('#btn').on('click', function() {

    // 入力された都市名でWebAPIに天気情報をリクエスト
    // Ajax →「Asynchronous JavaScript + XML」
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,

      // dataTypeでは、レスポンスとして取得したいデータの型を指定する。
      // 今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述する。
      dataType : 'jsonp',

       // done() →通信に成功した場合に記述するメソッド
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);

      // .fail() →失敗した場合に記述するメソッド。
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  })
});