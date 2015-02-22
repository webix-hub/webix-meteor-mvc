Views.templates = function(){

	var templates = {
		cols:[
			{ header:"Webix Data Binding (select row in table)", body:{
				id:"t1", view:"reactive", template: "info", data:{
					name:"Test", author:"Record"
				}}
			},
			{ header:"Meteor Data Binding", body:{
				id:"t2", view:"reactive", template: "allinfo" }
			}
		]
	};


	return {
		$ui:{
			type:"wide", rows:[ templates]
		}
	};

}