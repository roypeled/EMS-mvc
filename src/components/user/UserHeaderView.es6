import $ from "jquery";
import "./style.scss";


export default class UserHeaderView {

	constructor(){
		this.template = $("<div></div>");
	}

	onSayHi(handler){
		this.sayHiHandler = handler;
	}

	render(userData){
		this.template.html(`
			<header class="user-header">
				<h1>${userData.name}</h1>
				<ul>
					<li>${userData.email}</li>
					<li>${userData.phone}</li>
				</ul>
				<small>${userData.address.street}, ${userData.address.city}</small>
			</header>
		`);

		this.template.find("h1")
			.on("click", this.sayHiHandler);
	}

}