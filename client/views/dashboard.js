Views.dashboard = function(){

	var chart = Views["dashboard.chart"]();
	var tasks = Views["dashboard.tasks"]();

	return {
		$ui: {
			type:"space", rows:[
				chart,
				tasks
			]
		}
	};
};