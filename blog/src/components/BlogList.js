import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions";

class BlogPosts extends React.Component {
	renderBlog() {
		console.log(this.props.blogs);
	}

	render() {
		this.renderBlog();
		return <div>blog</div>;
	}
}

export default connect(null, { blogs: fetchBlogs })(BlogPosts);
