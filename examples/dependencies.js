'use strict';
define(['app',
		'backbone.marionette'
	],


	function(app) {
		app.foo();

		var Layout = Marionette.Layout.extend({});

		return {
			Views: {
				Layout: Layout
			}
		};
	});