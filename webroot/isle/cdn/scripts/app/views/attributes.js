define(["jquery","../Util","../NodeManager"],function(e,t,n){e(function(){var r=new n,i=!1;e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i=!0);var s={fieldNames:{id:"hidId",name:"txtName",type:"selType"},order:[{col:"name"}],itemName:"attribute",buildTable:function(n){var r="",i="";e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(r="<th></th>");var s="<thead>"+r+"<th>Attribute</th><th>Type/Unit</th></thead><tbody>",o="";e.each(n.items,function(n,r){i="",e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i='<td><span role="button" tabindex="0" id="'+r.id+'" title="Edit"><i class="icon-edit"></i></span></td>'),s+="<tr>"+i+"<td>"+t.htmlEncode(t.abbreviate(r.name,50))+"</td>",o="",r.AttributeType_abbr!==null&&(o=" ("+t.htmlEncode(t.abbreviate(r.AttributeType_abbr,50))+")"),s+="<td>"+t.htmlEncode(t.abbreviate(r.AttributeType_unit,45))+o+"</td></tr>"}),s+="</tbody>",e("#nodeTable").html(s)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=t.getObjects(n.items,"id",s)[0],u=o.name,a=o.type;e('#modalDialog input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog input[name="'+this.fieldNames.name+'"]').val(u),e('#modalDialog select[name="'+this.fieldNames.type+'"]').val(a)},duplicate:{field:"name",errorMsg:"That attribute already exists"},rowsClickable:i};r.intialize(s)})})