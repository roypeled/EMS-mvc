import $ from "jquery";
import "./style.scss";

export default class PostView {
	constructor(){
		this.template = $("<div></div>");
	}

	appendUser(userView){
		this.template.find(".post-user")
			.html(userView.template);
	}

	render(postData){
		this.template.html(`
			<section class="post">
				<h2>${postData.title}</h2>
				<div class="post-user"></div>
				<p>${postData.body}</p>
			</section>
		`)
	}
}