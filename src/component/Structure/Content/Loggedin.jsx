import React from "react";
import HighlightElement from "react-highlight";
import "./styles.css";
import login from "../../../images/login.png";

const Loggedin = () => {
  return (
    <div>
      <div className="title">User Logged Out</div>
      <p>
        When a user is logged out they can't comment, edit or delete their
        comment. They need to Log in or sign up to continue. You need to pass{" "}
        <b>logIn</b> object that contains link for login and signup.
      </p>
      <b>currentUser</b> is a required prop, but if there's no user details pass
      the prop as <b>currentUser={`{null}`}</b>
      <HighlightElement language="javascript">
        {`import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

  const LogInComponent = () => {
  const data = [
    {
      userId: '01a',
      comId: '012',
      fullName: 'Riya Negi',
      avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'Hey, Loved your blog! ',
      replies: [
      {
       userId: '02a',
  comId: '013',
  userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
  fullName: 'Adam Scott',
  avatarUrl: 'https://ui-avatars.com/api/name=Adam&background=random',
  text: 'Thanks! It took me 1 month to finish this 
  project but I am 
  glad it helped out someone!🥰'
      }
      ]
    }
  ]
  return <CommentSection
        currentUser={userId ? {
          currentUserId: '01a',
          currentUserImg:
            'https://ui-avatars.com/api/name=Riya&background=random',
          currentUserProfile:
            'https://www.linkedin.com/in/riya-negi-8879631a9/',
          currentUserFullName: 'Riya Negi'
        }:null}
        logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
          }:null}
        commentData={data}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
      />
}

export default LogInComponent
`}
      </HighlightElement>
      <p>This is how it would look if a user is logged out.</p>
      <div className="img-style">
        <img src={login} />
      </div>
    </div>
  );
};

export default Loggedin;
