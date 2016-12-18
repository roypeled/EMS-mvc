import $ from "jquery";
import "./style.scss";

export default class PostsListView {
	constructor(){
		this.template = $("<ul class='posts-list'></ul>");
	}

	addItem(postView){
		let post = $("<li></li>");
		post.append(postView.template);
		this.template.append(post);
	}
}