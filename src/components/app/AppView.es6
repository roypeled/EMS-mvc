import $ from "jquery";

export default class AppView {
	constructor(){
		this.template = $(`
			<div>
				<div class="header-container"></div>
				<div class="list-container"></div>
			</div>
		`);
	}

	renderHeader(headerView){
		this.template.find(".header-container")
			.append(headerView.template);
	}

	renderList(listView){
		this.template.find(".list-container")
			.append(listView.template);
	}
}