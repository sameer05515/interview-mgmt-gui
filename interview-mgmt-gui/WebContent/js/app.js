var app = angular.module('topicMgmtApp', [ 'ngRoute', 'ngAnimate',
		'angularTrix', 'ngSanitize' ]);

app.constant("topicMgmtAppConfig", {
	"restServices" : "http://127.0.0.1:8080/RestServices/rest",
	"interviewMgmtService":"http://127.0.0.1:8080/interview-mgmt/rest"
});

app.directive('checkList', function() {
	return {
		scope : {
			list : '=checkList',
			value : '@'
		},
		link : function(scope, elem, attrs) {
			var handler = function(setup) {
				var checked = elem.prop('checked');
				var index = scope.list.indexOf(scope.value);

				if (checked && index == -1) {
					if (setup)
						elem.prop('checked', false);
					else
						scope.list.push(scope.value);
				} else if (!checked && index != -1) {
					if (setup)
						elem.prop('checked', true);
					else
						scope.list.splice(index, 1);
				}
			};

			var setupHandler = handler.bind(null, true);
			var changeHandler = handler.bind(null, false);

			elem.bind('change', function() {
				scope.$apply(changeHandler);
			});
			scope.$watch('list', setupHandler, true);
		}
	};
})

/**
 * @name confirmOnExit
 * 
 * @description Prompts user while he navigating away from the current route
 *              (or, as long as this directive is not destroyed) if any unsaved
 *              form changes present.
 * 
 * @element Attribute
 * @scope
 * @param confirmOnExit
 *            Scope function which will be called on window refresh/close or
 *            AngularS $route change to decide whether to display the prompt or
 *            not.
 * @param confirmMessageWindow
 *            Custom message to display before browser refresh or closed.
 * @param confirmMessageRoute
 *            Custom message to display before navigating to other route.
 * @param confirmMessage
 *            Custom message to display when above specific message is not set.
 * 
 * @example Usage: Example Controller: (using controllerAs syntax in this
 *          example)
 * 
 * angular.module('AppModule', []).controller('pageCtrl', [function () {
 * this.isDirty = function () { // do your logic and return 'true' to display
 * the prompt, or 'false' otherwise. return true; }; }]);
 * 
 * Template:
 * 
 * <div confirm-on-exit="pageCtrl.isDirty()" confirm-message-window="All your
 * changes will be lost." confirm-message-route="All your changes will be lost.
 * Are you sure you want to do this?">
 * 
 * @see http://stackoverflow.com/a/28905954/340290
 * 
 * @author Manikanta G
 */

app.directive('confirmOnExit',
		function() {
			return {
				scope : {
					confirmOnExit : '&',
					confirmMessageWindow : '@',
					confirmMessageRoute : '@',
					confirmMessage : '@'
				},
				link : function($scope, elem, attrs) {
					window.onbeforeunload = function() {
						if ($scope.confirmOnExit()) {
							return $scope.confirmMessageWindow
									|| $scope.confirmMessage;
						}
					}
					var $locationChangeStartUnbind = $scope.$on(
							'$locationChangeStart', function(event, next,
									current) {
								if ($scope.confirmOnExit()) {
									if (!confirm($scope.confirmMessageRoute
											|| $scope.confirmMessage)) {
										event.preventDefault();
									}
								}
							});

					$scope.$on('$destroy', function() {
						window.onbeforeunload = null;
						$locationChangeStartUnbind();
					});
				}
			};
		});

/**
 * The animation applied on an ng-view directive takes place when a user
 * switches between views of an AngularJS application. As listed in the table
 * above, we can animate when a view enters or leaves. It is not necessary to
 * handle both of these cases; we can animate the one that seems necessary.
 * 
 * Following is an animation that induces some visual effect when a view is
 * entering:
 */

app.animation('.view-slide-in', function() {
	return {
		enter : function(element, done) {
			element.css({
				opacity : 0.5,
				position : "relative",
				top : "50px",
				left : "50px"
			}).animate({
				top : 0,
				left : 0,
				opacity : 1
			}, 1000, done);
		}
	};
});
