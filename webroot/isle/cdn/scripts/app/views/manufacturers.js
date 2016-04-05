define(["jquery","../Util","../NodeManager"],function(e,t,n){e(function(){var r=new n,i=!1;e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i=!0);var s={fieldNames:{id:"hidId",name:"txtName",url:"txtUrl"},itemName:"manufacturer",order:[{col:"name"}],buildTable:function(n){var r="",i="<tbody>";e.each(n.items,function(n,s){r="",e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(r='<td><span role="button" tabindex="0" id="'+s.id+'" title="Edit"><i class="icon-edit"></i></span></td>'),i+="<tr>"+r,i+='<td><a href="'+t.rootdir+"assets?item=manufacturer&value="+s.id+'">'+t.htmlEncode(t.abbreviate(s.name,100))+"</a>",s.url!==null&&s.url.length>0?i+=' <a href="'+t.htmlEncode(s.url)+'" aria-label="link to manufacturer website" target="_blank"><i class="icon-globe"></i></a></td>':i+="</td>",i+="</tr>"}),i+="</tbody>",e("#nodeTable").html(i)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=t.getObjects(n.items,"id",s)[0],u=o.url,a=o.name;e('#modalDialog input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog input[name="'+this.fieldNames.name+'"]').val(a),e('#modalDialog input[name="'+this.fieldNames.url+'"]').val(u)},duplicate:{field:"name",errorMsg:"That manufacturer already exists"},rowsClickable:i};r.intialize(s)})})