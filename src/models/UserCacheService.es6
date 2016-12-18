let instance;

class UserCacheService {

	constructor(){
		this.cache = {};
	}

	save(user){
		this.cache[user.id] = user;
	}

	get(id){
		return new Promise((resolve, reject) => {
			if(this.cache[id])
				resolve(this.cache[id]);
			else
				reject();
		});
	}
}

export default function getInstance(){
	if(!instance)
		instance = new UserCacheService();

	return instance;
}