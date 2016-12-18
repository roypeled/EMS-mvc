import $ from "jquery";
import {RootAPI}  from "./RootAPI.es6";
import CacheInstance from "./UserCacheService.es6";

export default class UsersService {
	static get(id){
		let promise = $.get(`${RootAPI}/users/${id}`);
		promise.then((user)=> {
				CacheInstance().save(user);
				return user;
			});

		return promise;
	}
}