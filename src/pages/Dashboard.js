import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../store/actions";
import SummaryCards from "../components/SummaryCards";
import AddPostForm from "../components/AddPostForm";
import PostList from "../components/PostList/PostList";

const Dashboard = () => {
  const { posts } = useSelector((state) => state.postsReducer);
  const featuredPost = useSelector((state) => {
    const postList = state.postsReducer.posts;
    return postList.filter((post) => post.featured === true).length;
  });
  const postCount = useSelector((state) => {
    const postList = state.postsReducer.posts;
    return postList.length;
  });
  const dispatch = useDispatch();

  const createPostCallback = (data) => {
    dispatch(addPost(data));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <h1>Posts</h1>
          <div className="separator mb-5"></div>
        </Col>
        <div className="col-lg-12 col-xl-6">
          <SummaryCards featuredPost={featuredPost} postCount={postCount} />
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card">
                <AddPostForm addPost={createPostCallback} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 mb-4">
          <PostList posts={posts} />
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;
