import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/tutorial.services";
const Tutorial = (props) => {
  const [currentTutorial, setCurrentTutorial] = useState([]);

  useEffect(() => {
    getTutorial(props.match.params.id);
  },[props]);

  const getTutorial = (id) => {
    TutorialDataService.get(id)
      .then((response) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeTitle = (e) => {
    let tempState = { ...currentTutorial };
    tempState.title = e.target.value;
    setCurrentTutorial(tempState);
  };

  const onChangeDescription = (e) => {
    let tempState = { ...currentTutorial };
    tempState.description = e.target.value;
    setCurrentTutorial(tempState);
  };

  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then((response) => {
        console.log(response.data);
        // props.history.push("/tutorials")
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updatePublished = (status) => {
    var data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status,
    };

    TutorialDataService.update(currentTutorial.id, data)
      .then((response) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
        props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteTutorial = () => {
    TutorialDataService.delete(currentTutorial.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form col-6">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={currentTutorial.title}
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentTutorial.description}
                onChange={onChangeDescription}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge bg-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge bg-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge bg-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge bg-success"
            onClick={updateTutorial}
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
