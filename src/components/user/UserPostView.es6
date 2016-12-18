import $ from "jquery";
import "./userPost.scss";

export default class UserPostView {

	constructor(){
		this.template = $("<div class='post-user-details'></div>");
	}

	onSayHi(handler){
		this.sayHiHandler = handler;
	}

	render(userData){
		this.template.html(`
			<div class="avatar"></div>
			<h3>${userData.name}</h3>
		`);

		this.template.find(".avatar")
			.on("click", this.sayHiHandler);
	}

}