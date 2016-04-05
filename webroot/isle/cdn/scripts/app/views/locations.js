define(["jquery","../Util","../NodeManager"],function(e,t,n){e(function(){var r=new n,i=!1;e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i=!0);var s={fieldNames:{id:"hidId",center:"selCenter",bldg:"txtBldg",room:"txtRoom"},itemName:"location",order:[{col:"center"},{col:"bldg"},{col:"room"}],buildHead:function(){return"<thead><th>Center</th><th>Building</th><th>Room</th></thead>"},buildTable:function(n){var r="",i="";e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(r="<th></th>");var s="<thead>"+r+"<th>Center</th><th>Building</th><th>Room</th></thead><tbody>";e.each(n.items,function(n,r){i="",e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i='<td><span role="button" tabindex="0" id="'+r.id+'" title="Edit"><i class="icon-edit"></i></span></td>'),s+="<tr>"+i+'<td><a href="'+t.rootdir+"assets?item=location&value="+t.htmlEncode(r.center)+'">'+t.htmlEncode(r.center)+"</a></td>",s+="<td>",t.htmlEncode(r["bldg"])!=""&&(s+='<a href="'+t.rootdir+"assets?item=location&value="+t.htmlEncode(r.center)+","+t.htmlEncode(r.bldg)+'">'+t.htmlEncode(r.bldg)+"</a>"),s+="</td>",s+="<td>",t.htmlEncode(r["room"])!=""&&(s+='<a href="'+t.rootdir+"assets?item=location&value="+t.htmlEncode(r.center)+","+t.htmlEncode(r.bldg)+","+t.htmlEncode(r.room)+'">'+t.htmlEncode(r.room)+"</a>"),s+="</td></tr>"}),s+="</tbody>",e("#nodeTable").html(s)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=t.getObjects(n.items,"id",s)[0],u=o.center,a=o.bldg,f=o.room;e('#modalDialog input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog input[name="'+this.fieldNames.center+'"]').val(u),e('#modalDialog input[name="'+this.fieldNames.bldg+'"]').val(a),e('#modalDialog input[name="'+this.fieldNames.room+'"]').val(f)},duplicate:{field:"room",errorMsg:"This location already exists"},rowsClickable:i};r.intialize(s);var o={fieldNames:s.fieldNames,itemName:s.itemName,select:["center"],filter:{cols:[]}};e("#"+s.fieldNames.center).autocomplete(r.buildACOptions(o));var u={fieldNames:s.fieldNames,itemName:s.itemName,select:["bldg"],filter:{cols:["center"]}};e("#"+s.fieldNames.bldg).autocomplete(r.buildACOptions(u));var a={fieldNames:s.fieldNames,itemName:s.itemName,select:["room"],filter:{cols:["center","bldg"]}};e("#"+s.fieldNames.room).autocomplete(r.buildACOptions(a))})})