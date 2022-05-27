import React from "react";
import Highlight from "react-highlight";
import "./styles.css";

const NoComments = () => {
  return (
    <div>
      <div className="title">No Comments</div>
      <p>
        If there are no comments to be shown a default component design will be
        rendered by the library. This can be customized by using the{" "}
        <b>customNoComment</b> prop, where the entire component can be stylized
        with custom text.
      </p>

      <Highlight language="javascript">
        {`import React from 'react'
import { CommentSectionComponent } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

  const CustomComponent = () => {

    const customNoComment = () => (
        <div className='no-com'>Sheessh! Zero Comments posted here!</div>
      )

  return <CommentSectionComponent
        currentUser={userId ? {
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
          }:null}
        commentData={[]}
         logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        customNoComment={() => customNoComment()}
      />
}

export default CustomComponent
`}
      </Highlight>
    </div>
  );
};

export default NoComments;
