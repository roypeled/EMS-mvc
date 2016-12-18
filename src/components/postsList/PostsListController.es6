import PostController from "../post/PostController.es6";
import PostView from "../post/PostView.es6";

export default class PostsListController {
	constructor(userId, postsService, postsListView){
		this.postsListView = postsListView;
		postsService.getPostsByUser(userId)
			.then(this.onPosts.bind(this));
	}

	onPosts(posts){
		posts.forEach((post)=>{
			let view = new PostView();
			new PostController(post, view);
			this.postsListView.addItem(view);
		});
	}
}