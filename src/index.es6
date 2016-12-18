import AppView from "./components/app/AppView.es6";
import AppController from "./components/app/AppController.es6";
import $ from "jquery";
import "./style.scss";

let view = new AppView();
new AppController(9, view);

$(document.body).append(view.template);

