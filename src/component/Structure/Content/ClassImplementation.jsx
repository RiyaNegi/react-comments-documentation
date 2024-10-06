import React from "react";
import HighlightElement from "react-highlight";
import "./styles.css";

const ClassImplementation = () => {
  return (
    <div>
      <div className="title">React Classes Implementation</div>
      <p>
        Following is react's classes method implementation of the library along
        with an example on how to pass cutom props and functions.
      </p>
      <HighlightElement language="javascript">
        {`import React, { PureComponent } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

class ClassComponent extends PureComponent {
  state = {
    data: [
      {
        userId: '01a',
        comId: '012',
        fullName: 'Riya Negi',
        avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
        userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
        text: 'Hey, Loved your blog! ',
        timestamp: "2024-09-28T10:34:56Z",
        replies: []
      },
      {
        userId: '02b',
        comId: '017',
        fullName: 'Lily',
        userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
        text: 'I have a doubt about the 4th point🤔',
        timestamp: "2024-09-28T10:34:56Z",
        avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
        replies: []
      }
    ]
  }

  onSubmitAction = (data:any) => {
    console.log('this comment was posted!',data)
  }

  customNoComment = () => <div className='no-com'>No comments wohoooo!</div>

  render() {
    return 
        <CommentSection
          currentUser={{
            currentUserId: '01a',
            currentUserImg:
              'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserProfile:
              'https://www.linkedin.com/in/riya-negi-8879631a9/',
            currentUserFullName: 'Riya Negi'
          }}
          commentData={this.state.data}
          onSubmitAction={(data:any) => this.onSubmitAction(data)}
          customNoComment={() => this.customNoComment()}
          placeholder={"Write a comment..."}
          logIn={{
            onLogin: () => alert("Call login function"),
            signupLink: 'http://localhost:3001/'
          }}
        />
  }
}

export default ClassComponent
`}
      </HighlightElement>
    </div>
  );
};

export default ClassImplementation;
