import React from "react";
import "./PostList.css";

const PostList = (props) => {
  const { posts } = props;
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Recently Added Posts</h5>
        {posts.length ? (
          <table
            className="data-table data-table-standard dataTable responsive nowrap"
            data-order='[[ 1, "desc" ]]'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {posts.reverse().map((post) => (
                <tr key={post.id}>
                  <td>
                    <p className="list-item-heading">{post.title}</p>
                  </td>
                  <td>
                    <p className="badge badge-pill badge-secondary">{post.category}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No post found</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
