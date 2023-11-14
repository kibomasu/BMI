console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	$("#my_btn").click(()=>{
		console.log("計算する");
		const strVal_sin = $("#my_sin").val();//文字列取得
		const numVal_sin = parseInt(strVal_sin,);
		const strVal_tai = $("#my_tai").val();//文字列取得
		const numVal_tai = parseInt(strVal_tai,);
		
		
		//TODO電卓を完成させなさい

		let kekka = numVal_tai / (numVal_sin * numVal_sin) * 100000
		kekka = Math.round(kekka)
		kekka /= 10
		

		$("#my_bmi").text(kekka);
		
        
	});
});