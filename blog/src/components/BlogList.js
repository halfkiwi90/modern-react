import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions";
import UserHeader from "./UserHeader";

class BlogPosts extends React.Component {
	componentDidMount() {
		this.props.fetchBlogs();
	}

	renderList() {
		return this.props.blogs.map((blog) => {
			return (
				<div className="item" key={blog.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{blog.title}</h2>
							<p>{blog.body}</p>
						</div>
					</div>
					<UserHeader userId={blog.userId} />
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { blogs: state.blogs };
};

export default connect(mapStateToProps, { fetchBlogs })(BlogPosts);
