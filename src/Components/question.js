import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./question.css";
import { EditorState } from "draft-js";
const Question = () => {
  const [state, setState] = useState({});
  const [code, setCode] = useState("");
  const handleSubmit = () => {};
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="title">EFFORT-BYPASS</div>
        </nav>
        <div class="row">
          <div className="column">
            <div className="QuestionName">1. Question_name</div>
            <hr></hr>
            <div className="Questiondetails">
              Lorem ipsum dolor sit amet, consectetur adPellentesque diam
              volutpat commodo sed. Rhoncus est pellentesque elit ullamcorper
              dignissim cras tincidunt lobortis feugiat. Mauris ultrices eros in
              cursus. Sed turpis tincidunt id aliquet risus. Nec nam aliquam sem
              et tortor. Viverra accumsan in nisl nisi scelerisque eu ultrices
              vitae. Eu lobortis elementum nibh tellus molestie nunc non. Quis
              varius quam quisque id. Lacinia at quis risus sed vulputate odio
              ut enim blandit. Nulla porttitor massa id neque aliquam vestibulum
              morbi blandit cursus. In dictum non consectetur a erat nam at
              lectus urna. Mattis nunc sed blandit libero volutpat sed cras
              ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor lacus luctus accumsan tortor posuere ac ut consequat
              semper. Metus dictum at tempor commodo ullamcorper a lacus
              vestibulum. Et pharetra pharetra massa massa ultricies mi quis.
              Orci eu lobortis elementum nibh tellus. Tempus imperdiet nulla
              malesuada pellentesque elit eget gravida. Semper quis lectus nulla
              at volutpat diam ut venenatis. Vestibulum lorem sed risus
              ultricies tristique. Maecenas sed enim ut sem viverra aliquet eget
              sit. Tristique senectus et netus et. Convallis tellus id interdum
              velit laoreet id. Vitae congue mauris rhoncus aenean vel elit
              scelerisque mauris pellentesque. Cras fermentum odio eu feugiat
              pretium nibh. Pellentesque diam volutpat commodo sed. Rhoncus est
              pellentesque elit ullamcorper dignissim cras tincidunt lobortis
              feugiat. Mauris ultrices eros in cursus. Sed turpis tincidunt id
              aliquet risus. Nec nam aliquam sem et tortor. Viverra accumsan in
              nisl nisi scelerisque eu ultrices vitae. Eu lobortis elementum
              nibh tellus molestie nunc non. Quis varius quam quisque id.
              Lacinia at quis risus sed vulputate odio ut enim blandit. Nulla
              porttitor massa id neque aliquam vestibulum morbi blandit cursus.
              In dictum non consectetur a erat nam at lectus urna. Mattis nunc
              sed blandit libero volutpat sed cras ornare. Est pellentesque elit
              ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
              Mattis pellentesque id nibh tortor. Risus pretium quam vulputate
              dignissim suspendisse in est ante in. Odio ut enim blandit
              volutpat maecenas volutpat blandit aliquam etiam. Enim facilisis
              gravida neque convallis. Elementum facilisis leo vel fringilla est
              ullamcorper. Diam in arcu cursus euismod quis viverra nibh cras
              pulvinar. Ut eu sem integer vitae justo eget magna fermentum
              iaculis. Condimentum lacinia quis vel eros donec. Eget sit amet
              tellus cras adipiscing. Malesuada nunc vel risus commodo viverra
              maecenas. Mi eget mauris pharetra et ultrices neque ornare. Nec
              nam aliquam sem et tortor. Egestas egestas fringilla phasellus
              faucibus scelerisque eleifend donec pretium. Est pellentesque elit
              ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
              Mattis pellentesque id nibh tortor. Risus pretium quam vulputate
              dignissim suspendisse in est ante in. Odio ut enim blandit
              volutpat maecenas volutpat blandit aliquam etiam. Enim facilisis
              gravida neque convallis. Elementum facilisis leo vel fringilla est
              ullamcorper. Diam in arcu cursus euismod quis viverra nibh cras
              pulvinar. Ut eu sem integer vitae justo eget magna fermentum
              iaculis. Condimentum lacinia quis vel eros donec. Eget sit amet
              tellus cras adipiscing. Malesuada nunc vel risus commodo viverra
              maecenas. Mi eget mauris pharetra et ultrices neque ornare. Nec
              nam aliquam sem et tortor. Egestas egestas fringilla phasellus
              faucibus scelerisque eleifend donec pretium.
            </div>
            <p></p>
          </div>
          <div className="column">
            <p></p>
            <Editor
              //initialContentState={state}
              //onContentStateChange={(contentState) => {
              //  setState({ contentState });
              //  setCode();
              //  console.log(code);
              //}}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              wrapperStyle={{
                width: 650,
                height: 550,
                border: "1px solid black",
              }}
            />
          </div>
          <div className="buttonbox">
            <button type="submit" className="button1">
              Run Code
            </button>
            <button type="submit" className="button2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
