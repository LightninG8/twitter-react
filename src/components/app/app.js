import React from "react";
import "./app.css";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

function App() {
	const postsList = [
		{label: "Сегодня я поел", id: "qwfvc"},
		{label: "Вчера я попил", id: "asdf"},
		{label: "Завтра я покекаю", id: "ghjd"},
	];
	return ( 
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={postsList}/>
			<PostAddForm/>
		</div>
	);
}

export default App;