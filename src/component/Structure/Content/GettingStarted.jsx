import React from "react";
import HighlightElement from "react-highlight";
import "./styles.css";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import defaultPng from "../../../images/default.png";

const GettingStarted = () => {
  const data = [
    {
      userId: "01a",
      comId: "012",
      fullName: "Riya Negi",
      avatarUrl: "https://ui-avatars.com/api/name=Riya&background=random",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "Hey, Loved your blog! ",
      replies: [
        {
          userId: "02a",
          comId: "013",
          userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
          fullName: "Adam Scott",
          avatarUrl: "https://ui-avatars.com/api/name=Adam&background=random",
          text: "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰",
        },
      ],
    },
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have a point🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];
  return (
    <div>
      <div className="title"> Getting Started</div>
      <b>Live Implementation ( Try it out yourself!! )</b>
      <CommentSection
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Riya Negi",
        }}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
        commentData={data}
      />
      <b>Installation</b>
      <br />
      <br />
      <span> Get started with installing the library.</span>
      <HighlightElement language="javascript">
        {`npm i react-comments-section`}
      </HighlightElement>
      <br />
      <b>Hooks Implementation (Typescript)</b>
      <p>
        Following is a basic example to start testing the library in your
        project. This library works on a user basis <br />
        system and here are a few important points to remember:{" "}
      </p>
      <li style={{ margin: "10px 5px" }}>
        <b>currentUser</b>[required]. For no user details pass the prop as{" "}
        <b>currentUser={`{null}`}</b>
      </li>
      <li style={{ margin: "10px 5px" }}>
        A new user can be redirected using the login/signup links in the{" "}
        <b>logIn</b>[required] prop.
      </li>
      <li style={{ margin: "10px 5px" }}>
        The <b>currentData</b>[optional] prop returns an object of current data
        available after any action such as comment submission, reply, edit or
        delete.{" "}
      </li>
      <li style={{ margin: "10px 5px" }}>
        The <b>onSubmitAction</b> returns an object of data with the required
        information to make an API call after a comment is submitted.
      </li>
      For more details check the props list for more such functions.
      <p>This is how the basic default component would look.</p>
      <div className="img-style">
        <img src={defaultPng} />
      </div>
      <HighlightElement language="javascript">
        {`import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const DefaultComponent = () => {
  const data =[
    {
      userId: '02b',
      comId: '017',
      fullName: 'Lily',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'I think you have a point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: []
    }
  ]
  return <CommentSection
        currentUser={{
          currentUserId: '01a',
          currentUserImg:
            'https://ui-avatars.com/api/name=Riya&background=random',
          currentUserProfile:
            'https://www.linkedin.com/in/riya-negi-8879631a9/',
          currentUserFullName: 'Riya Negi'
        }}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        commentData={data}
        onSubmitAction={(data: {
          userId: string
          comId: string
          avatarUrl: string
          userProfile?: string
          fullName: string
          text: string
          replies: any
          commentId: string
        }) => console.log('check submit, ', data)}
        currentData={(data: any) => {
          console.log('curent data', data)
        }}
      />
}

export default DefaultComponent
`}
      </HighlightElement>
    </div>
  );
};

export default GettingStarted;
