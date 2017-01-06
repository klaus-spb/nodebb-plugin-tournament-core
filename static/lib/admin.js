'use strict';
/* globals $, app, socket */

define('admin/plugins/tournament', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('tournament', $('.tournament-settings'));

		$('#save').on('click', function() {
			Settings.save('tournament', $('.tournament-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'tournament-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});