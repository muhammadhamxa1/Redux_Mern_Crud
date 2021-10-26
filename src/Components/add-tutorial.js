import React, { useState } from "react";
import TutorialDataService from "../services/tutorial.services";

const AddTutorial = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const [data,setData]=useState(null);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const saveTutorial = () => {
    var data = {
      title: title,
      description: description
    } 

    TutorialDataService.create(data)
      .then(res => {
        console.log(res.data);
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setId(null);
    setTitle("");
    setDescription("");
    setPublished(false);
    setSubmitted(false);
  };

  return (
    <>
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddTutorial;
