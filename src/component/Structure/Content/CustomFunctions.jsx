import React from "react";
import Highlight from "react-highlight";
import "./styles.css";

const CustomFunctions = () => {
  return (
    <div>
      <div className="title">Custom Functions</div>
      <div>
        This is how you can use this library component in line with your
        project. You can use the following functions to create custom effects or
        call necessary functions required in your project.
        <br />
        These can be pretty useful for making custom API calls to keep your
        database updated.
      </div>

      <Highlight language="javascript">
        {`import React, { useState } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const CustomComponent = () => {
  const [data, setData] = useState([
    {
      userId: '01a',
      comId: '012',
      fullName: 'Riya Negi',
      avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'Hey, Loved your blog! ',
      replies: [
    {
      userId: '02b',
      comId: '017',
      fullName: 'Lily',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'I have a doubt about the 4th point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: []
    }
  ])

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
        onSubmitAction={() =>
          setData([
            {
              userId: '02a',
              comId: '015',
              fullName: 'Robert Jae',
              avatarUrl:
                'https://ui-avatars.com/api/name=Robert&background=random',
              text: 'Woah pretty helpful! how did you solve for x?',
              userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
              replies: [
                {
                  userId: '01b',
                  comId: '016',
                  userProfile:
                    'https://www.linkedin.com/in/riya-negi-8879631a9/',
                  fullName: 'Adam Scott',
                  text: 'Thanks! refer to this link -> acs.com',
                  avatarUrl:
                    'https://ui-avatars.com/api/name=Adam&background=random'
                }
              ]
            }
          ])
        }
        onDeleteAction={() => window.prompt('Are you sure?')}
        onReplyAction={() => alert('Reply was posted')}
        onEditAction={() => alert('Reply was edited!')}
      />
}

export default CustomComponent}
`}
      </Highlight>
    </div>
  );
};

export default CustomFunctions;
