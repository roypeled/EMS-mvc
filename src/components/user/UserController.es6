export default class UserController {
	constructor(id, userService, userView){
		this.userView = userView;
		let promise = userService.get(id);
		promise.then(this.onUser.bind(this));

		this.userView.onSayHi(this.sayHi.bind(this));
	}

	sayHi(){
		alert(`${this.user.name} says hi!`);
	}

	onUser(user){
		this.user = user;
		this.userView.render(user);
	}
}