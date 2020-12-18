import React, {Component} from "react";
import "./app.css";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

export default class App extends Component {
	constructor (props) {
		super (props);

		this.state = {
			postsList: [
				{label: "Сегодня я поел", id: 1, isImportant: true, isLiked: false},
				{label: "Вчера я попил", id: 2, isImportant: false, isLiked: false},
				{label: "Русские вперёд", id: 3, isImportant: false, isLiked: false},
			],
			term: "",
			filter: "all",
		};

		this.maxId = 4;
	}
	deletePost = id => {
		this.setState(({postsList}) => {
			const index = postsList.findIndex(elem => elem.id === id);

			const newPostsList = [...postsList.slice(0, index), ...postsList.slice(index + 1)];

			return {
				postsList: newPostsList,
			};
		});
	};
	addPost = (post) => {
		this.setState(({postsList}) => {
			const newPost = {label: post, id: ++this.maxId};
			
			const newPostsList = [...postsList, newPost];

			return {
				postsList: newPostsList,
			};
		});
	};
	onToggleImportant = (id) => {
		const {postsList} = this.state;

		const index = postsList.findIndex(item => item.id === id);

		const old = postsList[index];
		const newPost = {...old, isImportant: !old.isImportant};

		const newPostList = [...postsList.slice(0, index), newPost, ...postsList.slice(index + 1)];

		this.setState(() => ({
			postsList: newPostList,
		}));
	};
	onToggleLike = (id) => {
		const {postsList} = this.state;

		const index = postsList.findIndex(item => item.id === id);

		const old = postsList[index];
		const newPost = {...old, isLiked: !old.isLiked};

		const newPostList = [...postsList.slice(0, index), newPost, ...postsList.slice(index + 1)];

		this.setState(() => ({
			postsList: newPostList,
		}));
	};
	searchPosts = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.label.indexOf(term) > - 1;
		});

	};
	onUpdateSearch = (term) => {
		this.setState(() => ({
			term: term
		}));
	};
	filterPosts = (items, filter) => {
		console.log(filter);
		if (filter === "like") {
			return items.filter(item => item.isLiked);
		} else {
			return items;
		}
	};
	onFilterSelect = (filter) => {
		this.setState(() => ({
			filter: filter
		}));
	};
	render() {
		const {postsList, term, filter} = this.state;

		const likedPostsCount = postsList.filter(item => item.isLiked).length;
		const allPostsCount = postsList.length;

		const visiblePosts = this.filterPosts(this.searchPosts(postsList, term), filter);

		return ( 
			<div className="app">
				<AppHeader 
					likedPostsCount={likedPostsCount}
					allPostsCount={allPostsCount}
				/>
				<div className="search-panel d-flex">
					<SearchPanel 
						onUpdateSearch={this.onUpdateSearch}/>
					<PostStatusFilter 
						filter={filter}
						onFilterSelect={this.onFilterSelect}/>
				</div>
				<PostList 
					posts={visiblePosts}
					onDelete={id => this.deletePost(id)}
					onToggleImportant={id => this.onToggleImportant(id)}
					onToggleLike={id => this.onToggleLike(id)}
				/>
				<PostAddForm
					onAddPost={this.addPost}/>
			</div>
		);
	}
	
}