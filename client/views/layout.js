Views.app = function(){
	var header = {
		type:"header", template:app.config.name
	};

	var menu = {
		view:"menu", id:"app:menu", 
		width:180, layout:"y", select:true,
		template:"<span class='webix_icon fa-#icon#'></span> #value# ",
		data:[
			{ value:"Dashboard", 		id:"dashboard",
				href:"/app/dashboard", 	icon:"envelope-o" },
			{ value:"Books", 			id:"books",
				href:"/app/books", 		icon:"briefcase" },
			{ value:"Templates",		id:"templates",
				href:"/app/templates", 	icon:"cog" }
		]
	};

	var ui = {
		type:"line", cols:[
			{ type:"clean", css:"app-left-panel",
				padding:10, margin:20, borderless:true, rows: [ header, menu ]},
			{ rows:[ { height:10}, 
				{ type:"clean", css:"app-right-panel", padding:4, rows:[
					{ $subview:true } 
				]}
			]}
		]
	};


	return {
		$ui: ui,
		$menu: "app:menu"
	};
};