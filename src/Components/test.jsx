import React from "react";
import api from "./api";
const Test = () => {
  const instance = api;
  function htmlResponse(res) {
    return (
      `<div className="alert alert-secondary mt-2" role="alert"><pre>` +
      JSON.stringify(res, null, 2) +
      "</pre></div>"
    );
  }
  console.log(instance);

  async function getAllData() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerText = "";

    try {
      const res = await instance.get("/tutorials");

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      resultElement.innerHTML = htmlResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlResponse(err);
    }
  }
  return (
    <>
      <div className="container my-3" style={{ "max-width": "600px" }}>
        <h3>Axios Requests example</h3>

        <div className="card mt-3">
          <div className="card-header">Testing</div>
          <div className="card-body">
            <div className="input-group input-group-sm">
              <button className="btn btn-sm btn-primary" onClick={getAllData()}>
                Get All
              </button>

              <input
                type="text"
                id="get-id"
                className="form-control ml-2"
                placeholder="Id"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-sm btn-primary"
                  onClick="getDataById()"
                >
                  Get by Id
                </button>
              </div>

              <input
                type="text"
                id="get-title"
                className="form-control ml-2"
                placeholder="Title"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-sm btn-primary"
                  onClick="getDataByTitle()"
                >
                  Find By Title
                </button>
              </div>

              <button
                className="btn btn-sm btn-warning ml-2"
                onClick="clearGetOutput()"
              >
                Clear
              </button>
            </div>

            <div id="getResult"></div>
          </div>
        </div>
      </div>

      {/* <div className="card mt-3">
        <div className="card-header">Axios POST Request - BezKoder.com</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" id="post-title" placeholder="Title">
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="post-description" placeholder="Description">
          </div>
          <button className="btn btn-sm btn-primary" onclick="postData()">Post Data</button>
          <button className="btn btn-sm btn-warning" onclick="clearPostOutput()">Clear</button>

          <div id="postResult"></div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">Axios PUT Request - BezKoder.com</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" id="put-id" placeholder="Id">
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="put-title" placeholder="Title">
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="put-description" placeholder="Description">
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="put-published">
            <label className="form-check-label" for="put-published">Publish</label>
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-sm btn-primary" onclick="putData()">Update Data</button>
            <button className="btn btn-sm btn-warning" onclick="clearPutOutput()">Clear</button>
          </div>

          <div id="putResult"></div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">Axios DELETE Request - BezKoder.com</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-danger" onclick="deleteAllData()">Delete All</button>

            <input type="text" id="delete-id" className="form-control ml-2" placeholder="Id">
            <div className="input-group-append">
              <button className="btn btn-sm btn-danger" onclick="deleteDataById()">Delete by Id</button>
            </div>

            <button className="btn btn-sm btn-warning ml-2" onclick="clearDeleteOutput()">Clear</button>
          </div>    
          
          <div id="deleteResult"></div>      
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Test;
