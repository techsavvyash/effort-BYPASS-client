import React from "react"
import "./QuesAdd.css"
const QuesAdd = () => {
  return (
    <>
      <nav className="navbar" >
        <div className="title" >EFFORT-BYPASS</div>
      </nav>
      <div className="add_questions">
        <form className="form_ques">
          <span className="formheading">Add Question </span>
          <br></br><br></br>
          <div className="input-container">
            <label>

              Question Title:
              <br></br>
              <input name="title" type="title" style={{  width : 500}}required />
            </label>
          </div>
          
          <div className="input-container">
            <label >
              Question:
              <br></br>
              <input
                name="Question"
                type="textarea"
                style={{ height : 200, width : 500}}
                required>

              </input>

            </label>
          </div>
          <div className="input-container">
            <label>
              Memory Constraits:
              <br></br>
              <input
                name="Memory"
                type="title"
                style={{ height : 100, width : 500}}
                required />
            </label>
          </div>
          <div className="input-container">
            <label>
              Time Constraits :
              <br></br>
              <input
                name="time"
                type="title" style={{ height : 100, width : 500 }}
                required />
            </label>
          </div>
          <div className="button_ques">
          <button className="button">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default QuesAdd;