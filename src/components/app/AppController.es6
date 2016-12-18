import PostsListController from "./../postsList/PostsListController.es6"
import PostsListView from "./../postsList/PostsListView.es6"
import UserController from "./../user/UserController.es6";
import UserHeaderView from "./../user/UserHeaderView.es6";
import UserService from "../../models/UsersService.es6";
import PostsService from "../../models/PostsService.es6";

export default class AppController {
	constructor(id, appView){
		let userView = new UserHeaderView();
		new UserController(id, UserService, userView);

		let listView = new PostsListView();
		new PostsListController(id, PostsService, listView);

		appView.renderHeader(userView);
		appView.renderList(listView);
	}
}