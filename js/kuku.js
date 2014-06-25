//val ans = 0;

//初期設定
$(function () {
	//ヘッドセット
	$('#1-1').text(1);
	$('#1-2').text(2);
	$('#1-3').text(3);
	$('#1-4').text(4);
	$('#1-5').text(5);
	$('#1-6').text(6);
	$('#1-7').text(7);
	$('#1-8').text(8);
	$('#1-9').text(9);
});


//九九の計算
function kuku_keisan(){
	alert('start');
	kuku2();
	kuku3();
	kuku4();
	kuku5();
	kuku6();
	kuku7();
	kuku8();
	kuku9();
	alert('end');
}

//2の段
function kuku2(){
	alert('2の段');
	//最初のデータを取得
	kuku1 = 2;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #2-';
		id　=　id　+　i;
		alert('2☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//3の段
function kuku3(){
	alert('3の段');
	//最初のデータを取得
	kuku1 = 3;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #3-';
		id　=　id　+　i;
		alert('3☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//4の段
function kuku4(){
	alert('4の段');
	//最初のデータを取得
	kuku1 = 4;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #4-';
		id　=　id　+　i;
		alert('4☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//5の段
function kuku5(){
	alert('5の段');
	//最初のデータを取得
	kuku1 = 5;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #5-';
		id　=　id　+　i;
		alert('5☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//6の段
function kuku6(){
	alert('6の段');
	//最初のデータを取得
	kuku1 = 6;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #6-';
		id　=　id　+　i;
		alert('6☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//7の段
function kuku7(){
	alert('7の段');
	//最初のデータを取得
	kuku1 = 7;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #7-';
		id　=　id　+　i;
		alert('7☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//8の段
function kuku8(){
	alert('8の段');
	//最初のデータを取得
	kuku1 = 8;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #8-';
		id　=　id　+　i;
		alert('8☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}

//9の段
function kuku9(){
	alert('9の段');
	//最初のデータを取得
	kuku1 = 9;
	//ループして計算とデータの書き込みを行う
	for (i = 1; i < 10; i++){

		//idの生成（ラベルセレクタの生成）
		id='tr #9-';
		id　=　id　+　i;
		alert('9☓'+i);
		//九九を計算
		kuku_answer = kuku1 * i;
		$(id).text(kuku_answer);
	}
}