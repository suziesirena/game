appServices.service('Eventservices', function($rootScope, $mdToast, $state, Event, Mail, PNJ, SMS, Action, sound, AppSettings) {

	var service = this;

	this.launch = function(event) {

		if (event.nextEventID && !event.action) {

			Event.findById(event.nextEventID).then(function(event) {
				service.launch(event);
			});
		}

		switch (event.type) {
			case 'mail':
				this.sendMail(event);
				break;
			case 'sms':
				this.sendSMS(event);
				break;
		}

	}

	this.sendSMS = function(event) {

		setTimeout(function(event) {
			PNJ.findById(event.senderID).then(function(pnj) {

					event.pnj = pnj;
					event.config = JSON.parse(event.config);

					for (var i = 0; i <= event.config.length - 1; i++)  {
						setTimeout(function(event, indexMessage) {

							SMS.create({
									senderID: event.senderID,
									senderName: event.pnj.firstName + ' ' + event.pnj.lastName,
									content: event.config[indexMessage][1],
									createDate: Date.now(),
									read: 'unread',
									answered: ''
								}).then(function(sms) {
									console.log('sms inserted : ' + JSON.stringify(sms));

									if ($state.current.name != 'app.home') {
										$mdToast.show({
											controller: 'toastController',
											templateUrl: 'toast.html',
											hideDelay: 3000,
											position: 'top',
											locals: {
												displayOption: {
													title: sms.senderName + " has sent you a message :<br/>" + sms.content
												}
											}
										});
									}

									$rootScope.appSettings.unreadSMS++;
									$rootScope.appSettings.save().then(function(results) {
										console.log(results);
									}).catch(function(error) {
										console.log('appSettings update : ' + error.message);
									});
									sound.notification();
								})
								.catch(function(error) {
									console.log('SMS creation : ' + error.message);
								});
						}, event.config[i][0], event, i);
					}
				})
				.catch(function(error) {
					console.log(error.message);
				});
		}, event.scheduledTime, event);
	}

	this.addAction = function(event) {
		var action = event.action;
		action.completed = 'false';

		switch (action.type) {
			case 'call':
				Action.create(event.action);
				break;
		}
	}

	this.sendMail = function(event) {

		setTimeout(function(event) {
			PNJ.findById(event.senderID).then(function(pnj) {

				var newMail = {
					senderID: event.senderID,
					senderName: pnj.firstName + ' ' + pnj.lastName,
					subject: event.subject,
					abstract: event.abstract,
					content: event.content,
					createDate: Date.now(),
					read: 'unread',
					answered: ''
				}

				if (event.action) {
					event.action = JSON.parse(event.action);
					if (event.action.type == 'read') {
						newMail.nextEventID = event.nextEventID;
					} else {
						service.addAction(event);
					}
				}

				Mail.create(newMail)
					.then(function(mail) {
						console.log('Mail inserted : ' + JSON.stringify(mail));
						if ($state.current.name != 'app.home') {
							$mdToast.show({
								controller: 'toastController',
								templateUrl: 'toast.html',
								hideDelay: 3000,
								position: 'top',
								locals: {
									displayOption: {
										title: mail.senderName + " has sent you a mail :<br/>" + mail.subject
									}
								}
							});
						}
						$rootScope.unreadMails++;
						$rootScope.appSettings.unreadMails++;
						$rootScope.appSettings.save().then(function(results) {
							console.log(results);
						}).catch(function(error) {
							console.log(error);
						});

						sound.notification();
					}, event)
					.catch(function(error) {
						console.log(error.message);
					});
			})
		}, event.scheduledTime, event);

	}

})