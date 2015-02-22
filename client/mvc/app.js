if (Meteor.isClient){
	Meteor.startup(function(){


		app = mvcCore.create({
			id:			"meteor-demo",
			name:		"Meteor Admin",
			version:	"0.1",
			debug:		true,
			start:		"/app/dashboard"		
		});

		app.use(mvcMenuHelper);


		Router.map(function(){
			//redirect start page
			this.route("/", function(){
				Router.go('/app/dashboard');
			});

			//all inner pages
			this.route("/(.*)", app.router);
		});

	});
}