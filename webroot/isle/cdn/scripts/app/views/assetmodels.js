define(["jquery","../Util","../NodeManager"],function(e,t,n){e(function(){function r(t){t?e("#filImage").prop("disabled",!0):e("#filImage").prop("disabled",!1)}r(e("#chkRemoveImg").is(":checked")),e("#chkRemoveImg").click(function(){r(e(this).is(":checked"))});var i=new n,s={itemName:"model",modelName:"AssetModel",itemVal:e("#hidId").val(),postURL:"assetmodels/"+e("#hidId").val(),successFunction:function(t,n,r){e("#fromItem").length>0?window.location="../assets/"+e("#fromItem").attr("data-value"):window.location="../assets/new"}};i.confirmDelete(s);var o={fieldNames:{id:"hidId",desc:"txtDesc",model:"txtModel",series:"txtSeries",mfr:"selMfr",url:"txtUrl",categories:"txtCategories"},itemName:s.modelName,select:["series"],filter:{cols:["mfr"]}};e("#"+o.fieldNames.series).autocomplete(i.buildACOptions(o));var u={fieldNames:o.fieldNames,itemName:"Category",select:["id","name"],filter:{cols:[]}},a=i.buildACOptions(u),f=e("#"+o.fieldNames.categories).val(),l=e("#hidCategoryLabels").val();e("#"+o.fieldNames.categories).val(""),e("#hidCategoryLabels").val(""),e("#"+o.fieldNames.categories).tagit({tagSource:a.source,requireAutocomplete:!0,onTagAdded:function(t,n){var r=e("#hidCategoryLabels").val(),i=e(n).find(".tagit-label").html();e("#hidCategoryLabels").val(r+i+",")},onTagRemoved:function(t,n){var r=e("#hidCategoryLabels").val(),i=e(n).find(".tagit-label").html();r=r.replace(i+",",""),e("#hidCategoryLabels").val(r)}});var c=l.split(",");e(f.split(",")).each(function(t,n){e("#"+o.fieldNames.categories).tagit("createTag",n,c[t])}),e(".tagit .ui-autocomplete-input").bind("autocompletefocus",function(t,n){return e(this).val(n.item.label),!1}),e("#"+o.fieldNames["categories"]).attr("data-postexists")!="true"&&(e(".tagit .ui-autocomplete-input").val("Loading categories..."),e(".tagit .ui-autocomplete-input").attr("disabled","disabled"),e.ajax({url:t.rootdir+"remoteInterface",headers:{"x-csrftoken":e("#csrfToken").html()},data:{model:"AssetModelCategory",method:"getAll",filter:{cols:[{col:"model",val:e("#hidId").val()}]}},dataType:"json",dataFilter:t.parseJSON,error:function(t,n,r){return e(".tagit .ui-autocomplete-input").val("Load failed."),e("#msg-"+o.fieldNames.categories).html("I'm sorry. Something went wrong."),!1},success:function(t,n,r){e.each(t.result.value.items,function(t,n){e("#"+o.fieldNames.categories).tagit("createTag",n.category,n.Category_name)}),e(".tagit .ui-autocomplete-input").val(""),e(".tagit .ui-autocomplete-input").removeAttr("disabled")}})),s={modals:!0,cache:!0,fieldNames:{id:"hidId",model:"hidModel",attribute:"selAttribute",value:"txtValue"},filter:{cols:[{col:"model",val:e("#hidId").val()}]},order:[{colClass:"Attribute",col:"name"},{col:"id"}],itemName:"Attribute",modelName:"AssetModelAttribute",buildTable:function(n){var r="<tbody>",i="",s="",o=1,u="";e.each(n.items,function(e,a){u="",a["Attribute_name"]==s?(o++,u=" #"+o):e<n.items.length-1&&a.Attribute_name===n.items[e+1].Attribute_name?(o=1,u=" #"+o):o=1,s=a.Attribute_name,i=a.AttributeType_abbr,i==null&&(a.Attribute_type>4?i=" "+a.AttributeType_unit:i=""),r+='<tr><td><span role="button" tabindex="0" id="'+a.id+'" title="Edit"><i class="icon-edit"></i></span></td><td>'+t.htmlEncode(a.Attribute_name+u+": "+a.value+i)+"</td></tr>"}),r+="</tbody>",e("#nodeTable").html(r)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=t.getObjects(n.items,"id",s)[0],u=o.attribute,a=o.Attribute_name,f=o.value,l="";o.AttributeType_abbr!==null&&(l=" ("+o.AttributeType_abbr+")"),e("#valueLabel").html(t.htmlEncode("Value : "+o.AttributeType_unit+l)),e('#modalDialog input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog input[name="'+this.fieldNames.value+'"]').val(f),e('#modalDialog select[name="'+this.fieldNames.attribute+'"]').val(u),e("#modalDialog .ui-combobox input").val(a)},duplicate:{field:"value",errorMsg:"That attribute and value already exists"},modalInit:function(){e("#valueLabel").html("Value")}},i.intialize(s),e("#"+s.fieldNames.attribute).combobox({selected:function(n,r){e("#valueLabel").html(t.htmlEncode("Value : "+e(r.item).attr("data-desc")))},renderDD:function(n,r){return e("<li></li>").data("item.autocomplete",r.item).append("<a>"+t.htmlEncode(r.item.label+" : "+e(r.item.option).attr("data-desc"))+"</a>").appendTo(r.ul)},customRenderOptions:!0});var h=new n,p={modals:!0,cache:!0,fieldNames:{id:"hidIdR",source:"selSource",relation:"selRelation",target:"selTarget"},filter:{cols:[{col:"source",val:e("#hidId").val()},{col:"target",val:e("#hidId").val()}],separator:"OR"},itemName:"Relationship",modelName:"AssetModelRelation",buildTable:function(n){var r="<tbody>";e.each(n.items,function(e,n){r+='<tr><td><span role="button" tabindex="0" id="'+n.id+'" title="Edit"><i class="icon-edit"></i></span></td><td><a href="'+t.rootdir+"assets?item=model&value="+n.source+'">'+t.htmlEncode(n.Manufacturer_name+" "+n.AssetModel_model)+'</a> <span class="bold-italic">'+t.htmlEncode(n.Relation_name)+'</span> <a href="'+t.rootdir+"assets?item=model&value="+n.target+'">'+t.htmlEncode(n.Manufacturer2_name+" "+n.AssetModel2_model)+"</a></td></tr>"}),r+="</tbody>",e("#nodeTable2").html(r)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=t.getObjects(n.items,"id",s)[0],u=o.source,a=o.relation,f=o.target;e('#modalDialog2 input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog2 select[name="'+this.fieldNames.source+'"]').val(u),e('#modalDialog2 select[name="'+this.fieldNames.relation+'"]').val(a),e('#modalDialog2 select[name="'+this.fieldNames.target+'"]').val(f)},duplicate:{field:"target",errorMsg:"This relationship already exists."},addBtnId:"addItemBtn2",dialogId:"modalDialog2",formId:"modalForm2",tableId:"nodeTable2",modalInit:function(){e('#modalDialog2 select[name="'+this.fieldNames.source+'"]').val(e("#hidId").val())},validate:function(){var t=e("#modalDialog2 #"+this.fieldNames.source),n=e("#modalDialog2 #"+this.fieldNames.target);return t.val()!=e("#hidId").val()&&n.val()!=e("#hidId").val()?(t.parents(".formItem").filter(":first").addClass("inError"),e("#msg-"+this.fieldNames.source).html("Either the source or target must be the current model."),t.attr("aria-invalid","true"),t.focus(),!1):!0}};h.intialize(p);if(e("html").attr("data-role")>=ISLE_CONTRIBUTOR){var d=new n,v={fieldNames:{id:"hidId",name:"txtName",url:"txtUrl"},itemName:"manufacturer",addBtnId:"addMfrBtn",dialogId:"modalDialogMfr",formId:"modalFormMfr",hasTable:!1,duplicate:{field:"name",errorMsg:"That manufacturer already exists"},successCallback:function(n){e("#"+o.fieldNames.mfr+" option").first().after('<option value="'+n.id+'">'+t.htmlEncode(n.name)+"</option"),e("#"+o.fieldNames.mfr).val(n.id),e("#"+o.fieldNames.mfr).focus()}};d.intialize(v);var m=new n,g={fieldNames:{id:"hidId",name:"txtName"},itemName:"relation",addBtnId:"addRelationBtn",dialogId:"modalDialogRelation",formId:"modalFormRelation",hasTable:!1,duplicate:{field:"name",errorMsg:"That relation already exists"},successCallback:function(n){e("#"+p.fieldNames.relation+" option").first().after('<option value="'+n.id+'">'+t.htmlEncode(n.name)+"</option"),e("#"+p.fieldNames.relation).val(n.id),e("#"+p.fieldNames.relation).focus()}};m.intialize(g),e("#"+g.dialogId).on("shown",function(){e(this).css("z-index",e(this).css("z-index")+20),e(".modal-backdrop").last().css("z-index",e(".modal-backdrop").css("z-index")+20),e(".modal-backdrop").first().hide()}),e("#"+g.dialogId).on("hidden",function(){e(".modal-backdrop").first().show()})}})})