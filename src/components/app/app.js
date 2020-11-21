import React from "react";
import "./app.css";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

function App() {
	const postsList = [
		{label: "Хочешь стать программистом?", important: true},
		{label: "Да ебись ты в рот!", important: false},
		{label: "Пойти нахуй", important: false},
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