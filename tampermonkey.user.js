// ==UserScript==
// @author      bachvkhoa
// @name        QLDT supporter by bachvkhoa
// @version     1.9.1.13e
// @include     *
// @run-at      document-start
// @require http://code.jquery.com/jquery-2.1.0.min.js
// @updateURL https://github.com/28dec/qldt_prepare_schedule/raw/master/tampermonkey.user.js
// @license MIT
// ==/UserScript==

function createArray(length) {
	var arr = new Array(length || 0),
		i = length;

	if (arguments.length > 1) {
		var args = Array.prototype.slice.call(arguments, 1);
		while(i--) arr[length-1 - i] = createArray.apply(this, args);
	}
	return arr;
}
document.addEventListener ("DOMContentLoaded", function(){
	console.log("Hello ^^,")
	if(document.getElementById("ctl00_ContentPlaceHolder1_ctl00_txtCaptcha")){
		console.log("from Bách văn Khoa's <3 with love","C A P T C H A         B Y P A S S E D");
		document.getElementById("ctl00_ContentPlaceHolder1_ctl00_txtCaptcha").value = document.getElementById("ctl00_ContentPlaceHolder1_ctl00_lblCapcha").textContent;
		$('#ctl00_ContentPlaceHolder1_ctl00_btnXacNhan').click();
	}
	var rows = 6; //here's your number of rows and columns
	var cols = 70;
	var tables = [];
	var m1 = new Map();
	var m2 = new Map();
	var course_list = new Map();
	var tkb_div = $('<div id="tkb_div"></div>')
	var table_data = createArray(3, rows * cols);
	for(var tmp1738 = 1; tmp1738 < 3; tmp1738++) for(var tmp1739 = 0; tmp1739 < rows * cols; tmp1739++) table_data[tmp1738][tmp1739] = new Map();
	for(var i = 0; i < 2; i++){
		var table_id = "tkb_preview_table" + (i+1);
		tables[i] = $('<table style="table-layout:fixed;text-align:center;border-collapse: collapse;" class="tkb_preview_table" id='+table_id+'><thead> <th></th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th> </thead><tbody>');
		var tkb_separator, start_time_in_hr;
		for(var r = 0; r < rows; r++)
		{
			if(r == 1) tkb_separator = 'border-bottom:2px solid blue;'
			else tkb_separator = '';
			if(r < 2){
				start_time_in_hr = r*2+7;
			} else {
				start_time_in_hr = r*2+8;
			}
		    var tr = $('<tr style="height:1px;'+tkb_separator+'"><td>'+ start_time_in_hr +'</td>');
		    for (var c = 0; c < cols; c++)
		    	if((c+1)%7){
			        $('<td ud_id="'+ (r*cols+c) +'" class="bvk_table_cell" style="border:solid green 1px;height:1px;">*</td>').appendTo(tr);
			    } else {
			        $('<td ud_id="'+ (r*cols+c) +'" class="bvk_table_cell" style="height:0px;"></td>').appendTo(tr);
			    }
		    tr.appendTo(tables[i]);
		}
		$('</tbody></table>').appendTo(tables[i]);
		tkb_div.append(tables[i])
	}
	tables[0].after($('<h4>from Bách Văn Khoa\'s keyboard with <3</h4>'))
	tables[1].after($("<h4>Nếu có bất kì vấn đề gì phát sinh thì hãy xóa extension TamperMonkey đi, mọi chuyện sẽ trở về như lúc bạn chưa từng cài.<br>Mọi ý kiến đóng góp đều được trân trọng, ném vào vùng kín cho mình nha :3 -> <a target='new' style='color:red;'href='https:fb.com/bachvkhoa'>CLICK HERE</a></h4>"))
	$("#pnlDSMonhocDK").prepend(tkb_div)
	tkb_div.css("background-color","#FFFFFF")
	$('#ctl00_ContentPlaceHolder1_ctl00_UpdatePanel2').append("<div id=bvk_tooltip style='display:none;background-color:yellow;width=500px;'></div>")
	$(document).on("mouseover", "#tkb_preview_table1 td", function(e){
		$("#bvk_tooltip").offset({ left: e.pageX, top: e.pageY });
		var index_1305 = $(this).attr('ud_id')
		var text_1313 = '';
		for([key, value] of table_data[1][index_1305]){
			text_1313 += value + "<br>";
		}
		$("#bvk_tooltip").html(text_1313);
		$("#bvk_tooltip").show("slow");
	})
	$(document).on("mouseover", "#tkb_preview_table2 td", function(e){
		$("#bvk_tooltip").offset({ left: e.pageX, top: e.pageY });
		var index_1305 = $(this).attr('ud_id')
		var text_1313 = '';
		for([key, value] of table_data[2][index_1305]){
			text_1313 += value + "<br>";
		}
		$("#bvk_tooltip").html(text_1313);
		$("#bvk_tooltip").show("slow");
	})
	$(document).on("mouseover", "#divMonHoc", function(){
		// highlight what course full
		$("#divTDK").find('td').map(function(){if($(this).text() == "Hết")$(this).parent().css('background-color', '#FFAAAA')})
		// end of highlight course full
	})
	$(document).on("click", "#divTDK table", function(){
		var course = $(this).find('td')
		var weeks = []
		var day_of_week = []
		var start_time = []
		var duration_time = []
		var subject_code = course.eq(1).text();
		var subject_name = course.eq(2).text();
		var subject_group = course.eq(3).text();
		var subject_tth = course.eq(4).text();
		var subject_teacher = course.eq(15).find('div.top-fline').eq(0).text();

		if(m1.get(subject_code) != undefined){
			var tmp_213 = m1.get(subject_code);
			for(i = 0; i < tmp_213.length; i++){
				if($("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_213[i]).html() == "+"){ // trung
					$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_213[i]).html("-");
					$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_213[i]).css("background-color", "#00FF00"); //green
				} else {
					$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_213[i]).html("*");
					$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_213[i]).css("background-color", "#FFFFFF"); //white
					// $("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_213[i]).prop('value', '');
				}
			}
			tmp_213 = m2.get(subject_code);
			for(i = 0; i < tmp_213.length; i++){
				if($("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_213[i]).html() == "+"){ // trung
					$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_213[i]).html("-");
					$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_213[i]).css("background-color", "#00FF00"); //green
				} else {
					$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_213[i]).html("*");
					$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_213[i]).css("background-color", "#FFFFFF"); //white
					// $("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_213[i]).prop('value', '');

				}
			}
			for(i = 1; i < 3; i++){
				for(j = 0; j < rows * cols; j++){
					table_data[i][j].delete(subject_code)
				}
			}
		}
		course.eq(16).find('div.top-fline').map(function(){
			var tmp_151 = []
			for(i = 0; i < $(this).text().length; i++){
				if($(this).text()[i] != "-"){
					if(i < 9){
						tmp_151.push(parseInt($(this).text()[i]))
					} else if(i < 19) {
						tmp_151.push(parseInt("1" + $(this).text()[i]))
					} else{
						tmp_151.push(parseInt("2" + $(this).text()[i]))
					}
				}
			}
			weeks.push(tmp_151)
		})
		course.eq(11).find('div.top-fline').map(function(){
			// day_of_week.push($(this).text())
			var data = $(this).text().toUpperCase();
			switch(data){
				case "HAI":
				case "MON":
					day_of_week.push(0);
					break;

				case "BA":
				case "TUE":
					day_of_week.push(1);
					break;

				case "TƯ":
				case "WED":
					day_of_week.push(2);
					break;

				case "NĂM":
				case "THU":
					day_of_week.push(3);
					break;

				case "SÁU":
				case "FRI":
					day_of_week.push(4);
					break;

				case "BẢY":
				case "SAT":
					day_of_week.push(5);
					break;

				case "CHỦ NHẬT":
				case "SUN":
					day_of_week.push(6);
					break;

				default:
					alert("Error 139: Không hiểu môn học ngày thứ mấy! -> " + data)

			}
		})
		course.eq(12).find('div.top-fline').map(function(){
			start_time.push(parseInt(parseInt($(this).text())/2))
		})
		course.eq(13).find('div.top-fline').map(function(){i
			duration_time.push(parseInt($(this).text()))
		})
		if(weeks.length != day_of_week.length){
			alert("Hệ thống đang bị lỗi môn này!");
		} else {
			var tmp1 = [];
			var tmp2 = [];
			for(i = 0; i < weeks.length; i++){
				var crr_dow = day_of_week[i];
				var crr_st = start_time[i];
				var crr_dt = duration_time[i];
				var crr_aw = weeks[i]; // array week
				for(var j = 0; j < crr_aw.length; j++){
					var crr_w = crr_aw[j]-1; //array start count from 0
					if(crr_w < 10){
						tmp1.push(crr_dow+crr_w*7+crr_st*70);
						if(crr_dt == 4){
							tmp1.push(crr_dow+crr_w*7+(crr_st+1)*70);
						}
					} else {
						crr_w -= 10;
						tmp2.push(crr_dow+crr_w*7+crr_st*70);
						if(crr_dt == 4){
							tmp2.push(crr_dow+crr_w*7+(crr_st+1)*70);
						}
					}
				}
			}
			m1.set(subject_code, tmp1);
			m2.set(subject_code, tmp2);
			if(m1.get(subject_code) != undefined){
				var tmp_219 = m1.get(subject_code);
				for(i = 0; i < tmp_219.length; i++){
					if($("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_219[i]).text() == "-"){ // da co mon tu truoc
						$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_219[i]).css("background-color", "#FF0000"); //red
						$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_219[i]).html("+");
					} else {
						$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_219[i]).css("background-color", "#00FF00"); // green
						// $("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_219[i]).prop('value', subject_code); // green
						$("#tkb_preview_table1").find('td.bvk_table_cell').eq(tmp_219[i]).html("-");
					}
					table_data[1][tmp_219[i]].set(subject_code, subject_name + " - " + subject_group + " - " + subject_tth + " - " + subject_teacher)
					course_list.set(subject_code, subject_name + " - " + subject_group + " - " + subject_tth + " - " + subject_teacher)
				}
				tmp_219 = m2.get(subject_code);
				for(i = 0; i < tmp_219.length; i++){
					if($("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_219[i]).text() == "-"){ // da co mon tu truoc
						$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_219[i]).css("background-color", "#FF0000"); //red
						$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_219[i]).html("+");
					} else {
						$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_219[i]).css("background-color", "#00FF00"); //green
						// $("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_219[i]).prop('value', subject_code); //green
						$("#tkb_preview_table2").find('td.bvk_table_cell').eq(tmp_219[i]).html("-");
					}
					table_data[2][tmp_219[i]].set(subject_code, subject_name + " - " + subject_group + " - " + subject_tth + " - " + subject_teacher)
					course_list.set(subject_code, subject_name + " - " + subject_group + " - " + subject_tth + " - " + subject_teacher)
				}
			}
		}
		$("#pnlDSMonhocDK").find('span.course_list_element').map(function(){
			$(this).remove()
		})
		for([key, value] of course_list){
			$("#pnlDSMonhocDK").append("<span class='course_list_element'>"+value+"<br></span>")
		}
	});
});
