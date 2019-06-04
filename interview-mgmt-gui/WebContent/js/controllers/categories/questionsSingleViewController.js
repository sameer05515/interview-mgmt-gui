//questionsSingleView

app
		.controller(
				'questionsSingleViewController',
				function($scope, $http,$log, topicMgmtAppConfig,InterviewManagementServices) {

					$scope.topicObj = {
						"title" : "my title",
						"description" : ""
					};
					$scope.topicsList = [];
					$scope.topic = {};
					var counter = 1;
					$scope.filteredItems = [];
					$scope.showList = true;

					$scope.showTopicsList = function() {
						$scope.showList = !$scope.showList;
						if ($scope.showList) {
							document.getElementById('topicDetailsDiv').classList
									.add('col-lg-8');
							document.getElementById('topicDetailsDiv').classList
									.remove('col-lg-12');
						} else {
							document.getElementById('topicDetailsDiv').classList
									.add('col-lg-12');
							document.getElementById('topicDetailsDiv').classList
									.remove('col-lg-8');
						}
					};

					$scope.fetchTopicList = function() {
                        InterviewManagementServices.fetchAnswersJson()
                        .success(function(data) {
							// alert("Success : "+data);
							$scope.topicsList = data;
                            // $scope.sortBy($scope.propertyName);
                            
                            $log
									.log("Successfully fetched category list "
											+ " : "
											+ angular
													.toJson($scope.topicsList));

						}).error(function(data) {
                            $log.log("Error : " + data);
							// alert("Error : " + data);
						});
					};

					$scope.idSelectedVote = null;
					$scope.setSelected = function(idSelectedVote) {
						$scope.idSelectedVote = idSelectedVote;
					};

					$scope.showAt = function(indexVal) {
						counter = indexVal;
						$scope.topic = $scope.filteredItems[counter];
						$scope.setSelected($scope.topic.id);
						// counter = (counter >= $scope.filteredItems.length -
						// 1) ? 0
						// : (counter + 1);
					};

					$scope.next = function() {
						counter = (counter >= $scope.filteredItems.length - 1) ? 0
								: (counter + 1);
						$scope.topic = $scope.filteredItems[counter];
						$scope.setSelected($scope.topic.id);
					};

					$scope.previous = function() {
						counter = (counter == 0) ? ($scope.filteredItems.length - 1)
								: (counter - 1);
						$scope.topic = $scope.filteredItems[counter];
						$scope.setSelected($scope.topic.id);
					};

					// ///////////////////////

					// Initialization
					$scope.onKeyDownResult = "";
					$scope.onKeyUpResult = "";
					$scope.onKeyPressResult = "";

					// Utility functions

					var getKeyboardEventResult = function(keyEvent,
							keyEventDesc) {
						return keyEventDesc
								+ " (keyCode: "
								+ (window.event ? keyEvent.keyCode
										: keyEvent.which) + ")";
					};

					// Event handlers
					$scope.onKeyDown = function($event) {
						$scope.onKeyDownResult = getKeyboardEventResult($event,
								"Key down");
					};

					$scope.onKeyUp = function($event) {
						$scope.onKeyUpResult = getKeyboardEventResult($event,
								"Key up");
					};

					$scope.onKeyPress = function($event) {
						$scope.onKeyPressResult = getKeyboardEventResult(
								$event, "Key press");
					};

					// ////////////////////////

					// //////////////////////
					$scope.propertyName = 'dateLastModified';
					$scope.reverse = true;
					// $scope.friends = friends;

					$scope.sortBy = function(propertyName) {
						$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse
								: false;
						$scope.propertyName = propertyName;

						$scope.showAt(1);
					};

					$scope.init = function() {
						$scope.fetchTopicList();
						$scope.showTopicsList();
					};

					$scope.init();

				});
