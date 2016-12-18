import $ from "jquery";
import {RootAPI}  from "./RootAPI.es6";

export default class PostsService {
	static getPostsByUser(userId){
		return $.get(`${RootAPI}/posts/?userId=${userId}`);
	}
}