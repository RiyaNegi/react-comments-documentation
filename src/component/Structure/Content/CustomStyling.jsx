import React from "react";
import Highlight from "react-highlight";
import "./styles.css";
import custom from "../../../images/custom.png";

const CustomStyling = () => {
  return (
    <div>
      <div className="title">Custom Styling</div>
      <div>
        This is how you can create your custom styled component. All available
        styling props are used in the following example. You can pass CSS styles
        in the object in react jsx in-line CSS styling format.
      </div>
      <div>
        <b>removeEmoji</b> can be used to remove the emoji option from the input
        field.
      </div>
      <div>
        <b>commentsCount</b> can be used to pass custom comment count in case
        the user executes pagination and wants to keep track of total comments.
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
          userId: '02a',
          comId: '013',
          userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
          fullName: 'Adam Scott',
          avatarUrl: 'https://ui-avatars.com/api/name=Adam&background=random',
          text: 'Thanks! It took me 1 month to finish this project but I
           am glad it helped out someone!🥰'
        }
      ]
    }
  ])

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
        logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
          }}
        hrStyle={{ border: '0.5px solid #ff0072' }}
        titleStyle={{ color: '#f2f2f2' }}
        commentsCount={8}
        commentData={data}
        imgStyle={{ borderRadius: '0%' }}
        customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https
        %3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F
        2015%2F04%2F05%2Ffeatured.jpg&q=60%27'
        inputStyle={{ border: '1px solid rgb(208 208 208)' }}
        formStyle={{ backgroundColor: 'white' }}
        submitBtnStyle={{ border: '1px solid black', backgroundColor: 'black' }}
        cancelBtnStyle={{
          border: '1px solid gray',
          backgroundColor: 'gray',
          color: 'white'
        }}
        removeEmoji={true}
        overlayStyle={{ backgroundColor: '#0f0d29', color: 'white' }}
        replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
      />
}

export default CustomComponent
`}
      </Highlight>
      <p>
        This is how the custom styled component would look with the above
        styling.
      </p>

      <div className="img-style">
        <img src={custom} />
      </div>
    </div>
  );
};

export default CustomStyling;
