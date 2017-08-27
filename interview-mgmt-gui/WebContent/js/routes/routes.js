/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html"/* , controller: "PshortDescriptionCtrl" */})
    // PshortDescriptions
    .when("/about", {templateUrl: "partials/about.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/faq", {templateUrl: "partials/faq.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/pricing", {templateUrl: "partials/pricing.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/services", {templateUrl: "partials/services.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/contact", {templateUrl: "partials/contact.html"/* , controller: "PshortDescriptionCtrl" */})
    // links
    .when("/links", {templateUrl: "partials/link-mgmt/links-list.html"/* , controller: "repeatController" */})
	// topics
    .when("/topics", {templateUrl: "partials/topics/showAllTopics.html", controller: "showAllTopicsController"})
	.when("/topics-list", {templateUrl: "partials/topics/showAllCategories-list.html", controller: "showAllCategoriesController-list"})
	.when("/topics-list/:id", {templateUrl: "partials/topics/showTopic.html", controller: "showTopicController"})
	.when("/topics/new", {templateUrl: "partials/topics/createTopic.html", controller: "createTopicController"})
	.when("/topics/:id", {templateUrl: "partials/topics/updateTopic.html" , controller: "updateTopicController"})
	// groups
    .when("/groups", {templateUrl: "partials/groups/showAllGroups.html", controller: "showAllGroupsController"})
	.when("/groups-list", {templateUrl: "partials/groups/showAllGroups-list.html", controller: "showAllGroupsController-list"})
	.when("/groups-list/:id", {templateUrl: "partials/groups/showGroup.html", controller: "showGroupController"})
	.when("/groups/new", {templateUrl: "partials/groups/createGroup.html", controller: "createGroupController"})
	.when("/groups/:id", {templateUrl: "partials/groups/updateGroup.html" , controller: "updateGroupController"})
	// views
    .when("/views", {templateUrl: "partials/views/showAllViews.html", controller: "showAllViewsController"})
	.when("/views-list", {templateUrl: "partials/views/showAllViews-list.html", controller: "showAllViewsController-list"})
	.when("/views-list/:id", {templateUrl: "partials/views/showView.html", controller: "showViewController"})
	.when("/views/new", {templateUrl: "partials/views/createView.html", controller: "createViewController"})
	.when("/views/:id", {templateUrl: "partials/views/updateView.html" , controller: "updateViewController"})
	.when("/site-updates", {templateUrl: "partials/help/updates.html" , controller: "topicUpdatesController"})
	// Blog
    .when("/blog", {templateUrl: "partials/blog.html"/* , controller: "BlogCtrl" */})
    .when("/blog/post", {templateUrl: "partials/blog_item.html"/* , controller: "BlogCtrl" */})
    // Vocabulary
    .when("/vocabulary/new", {templateUrl: "partials/vocabulary/addWord.html" , controller: "addWordController" })
    .when("/vocabulary/:id", {templateUrl: "partials/vocabulary/updateWord.html" , controller: "updateWordController" })
    .when("/vocabulary", {templateUrl: "partials/vocabulary/showAllWords.html" , controller: "showAllWordsController" })
    
    // else 404
    .otherwise("/404", {templateUrl: "../../partials/404.html"/* , controller: "PshortDescriptionCtrl" */});
}]);