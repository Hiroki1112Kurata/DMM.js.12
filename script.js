// $('要素[属性]')関数 →特定の属性を持つ要素を絞り込む
// $('要素[属性 = "値"]') →属性値が特定の値に等しい要素を取得する
// $('要素[属性 != "値"]') 特定の値に”等しくない”要素を取得する

// .hide(); →特定のhtml要素を非表示にするメソッド。

// index①・・・ id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になる。・・・
$('#tab-contents .tab[id != "tab1"]').hide();


// クリックされたときのイベント
$('#tab-menu a').on('click', function(event) {
  // タブ内の全てのコンテンツを非表示
  $("#tab-contents .tab").hide();

  // .removeClass() →クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  // =>可視部分のcssを削除
  $("#tab-menu .active").removeClass("active");

  // .addClass() →任意のHTML要素にクラス属性を追加できるメソッド
  $(this).addClass("active");

  // .attr() →HTML要素の属性を取得したり設定できるメソッド
  // .show() →要素を表示するメソッド
  // =>タブがクリックされたとき対象のhref要素を取得、中身を表示する。
  $($(this).attr("href")).show();
  event.preventDefault();
});