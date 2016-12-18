import UserController from "../user/UserController.es6";
import UserPostView from "../user/UserPostView.es6";
import getCacheInstance from "../../models/UserCacheService.es6";

export default class PostController {
	constructor(postData, postView){
		this.postView = postView;
		postView.render(postData);

		this.createUser(postData.userId);
	}

	createUser(userId){
		let view = new UserPostView();
		new UserController(userId, getCacheInstance(), view);
		this.postView.appendUser(view);
	}
}
