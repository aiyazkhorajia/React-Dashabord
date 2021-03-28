import React from "react";
import { useForm } from "react-hook-form";

function AddPostForm({ addPost }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    data["id"] = Math.floor(Math.random() * 9999999999);
    console.log(data);
    addPost(data);
  };
  return (
    <div className="card-body">
      <h5 className="card-title">Quick Post</h5>
      <div className="dashboard-quick-post">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Title*</label>
            <div className="col-sm-9">
              <input
                name="title"
                className="form-control"
                ref={register({ required: true, maxLength: 50 })}
                placeholder="Post Title..."
              />
              <span className="error-msg">{errors.title && "Title is required"}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Content*</label>
            <div className="col-sm-9">
              <textarea
                name="content"
                className="form-control"
                rows="3"
                ref={register({ required: true })}></textarea>
              <span className="error-msg">{errors.content && "Content is required"}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Category*</label>
            <div className="col-sm-9">
              <label className="w-100">
                <select
                  name="category"
                  ref={register({ required: true })}
                  className="form-control select2-single"
                  data-width="100%">
                  <option label="Choose Category">&nbsp;</option>
                  <option>Media</option>
                  <option>News</option>
                  <option>Sports</option>
                  <option>General</option>
                  <option>Other</option>
                </select>
                <span className="error-msg">{errors.category && "Category is required"}</span>
              </label>
            </div>
          </div>
          <div className="form-group row mb-1">
            <label className="col-sm-3 col-form-label">Featured Post</label>
            <div className="col-sm-9">
              <div className="custom-switch custom-switch-primary mb-2 custom-switch-small">
                <input
                  name="featured"
                  ref={register}
                  className="custom-switch-input"
                  id="featured"
                  type="checkbox"
                />{" "}
                <label className="custom-switch-btn" htmlFor="featured"></label>
              </div>
            </div>
          </div>
          <div className="form-group row mb-0">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
