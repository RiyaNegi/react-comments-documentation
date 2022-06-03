import React from "react";
import HighlightElement from "react-highlight";
import "./styles.css";

const Props = () => {
  const PropsList = [
    {
      title: "commentData",
      desc: "This prop is required to give an array of comments in this format strictly If there are no comments you can send an empty array. ",
      utility: "Array | required",
      typeDef: `commentData: Array<{
            userId: string
            comId: string
            fullName: string
            avatarUrl: string
            text: string
            userProfile?: string
            replies?: Array <{
                  userId: string
                  comId: string
                  fullName: string
                  avatarUrl: string
                  text: string
                  userProfile?: string
                }>
              | undefined
          }>
      `,
    },
    {
      title: "currentUser",
      desc: "This prop is required to give currently logged in user's details.",
      utility: "object | null | required",
      typeDef: `currentUser?: {
            currentUserId: string
            currentUserImg: string
            currentUserProfile: string
            currentUserFullName: string
          }|null
        `,
    },
    {
      title: "logIn",
      desc: "This prop can be used in case no user is logged in, It can redirect it the user to the given login/signup link.",
      utility: "object | required",
      typeDef: `logIn?: {
            loginLink: string
            signupLink: string
          }`,
    },
    {
      title: "advancedInput",
      desc: "This prop can be used to access a rich text editor type of input box",
      utility: "booleam | optional",
      typeDef: `advancedInput?: boolean`,
    },
    {
      title: "customImg",
      desc: "This prop can be used to provide a custom image for the input field that is used by the current user to input their replies.",
      utility: "string | optional",
      typeDef: `customImg?: string`,
    },
    {
      title: "commentsCount",
      desc: "This prop can be used to provide a custom count for the comments in case the use wants to add pagination and keep a track of totalled count. The component library uses its own default count if not provided with this prop. ",
      utility: "number | optional",
      typeDef: `commentsCount?: number`,
    },
    {
      title: "inputStyle",
      desc: "This prop can be used to style the input field.",
      utility: "object | optional",
      typeDef: `inputStyle?: object`,
    },
    {
      title: "replyInputStyle",
      desc: "This prop can be used to style the input field when a user is replying to another comment.",
      utility: "object | optional",
      typeDef: `replyInputStyle?: object`,
    },
    {
      title: "formStyle",
      desc: "This prop can be used to style the background of the input field block.",
      utility: "object | optional",
      typeDef: `formStyle?: object`,
    },
    {
      title: "submitBtnStyle",
      desc: "This prop can be used to style the post button for the reply. ",
      utility: "object | optional",
      typeDef: `submitBtnStyle?: object`,
    },
    {
      title: "cancelBtnStyle",
      desc: "This prop can be used to style the cancel button for the reply.        ",
      utility: "object | optional",
      typeDef: `cancelBtnStyle?: object`,
    },
    {
      title: "overlayStyle",
      desc: "This prop can be used to style the entire background of the react-comments-section component.        ",
      utility: "object | optional",
      typeDef: `overlayStyle?: object`,
    },
    {
      title: "imgStyle",
      desc: "This prop can be used to style the image tag of the user profiles.",
      utility: "object | optional",
      typeDef: `imgStyle?: object`,
    },
    {
      title: "hrStyle",
      desc: "This prop can be used to style the horizontal line below the Comments title. You can remove it by setting `border:0px`",
      utility: "object | optional",
      typeDef: `hrStyle?: object`,
    },
    {
      title: "titleStyle",
      desc: "This prop can be used to style the Comments title",
      utility: "object | optional",
      typeDef: `titleStyle?: object`,
    },
    {
      title: "removeEmoji",
      desc: "This prop is false by default. It can be used to remove the emoji feature in the input box by setting it true.",
      utility: "boolean | optional",
      typeDef: `removeEmoji?: boolean`,
    },

    {
      title: "customNoComment",
      desc: "This prop can be used to pass your custom styled “No comments here” div when there are no comments. Default “No comments” is provided by the library which will be used in case this props is not passed. Pass an empty prop if you don’t want anything to be written when there are no comments ",
      utility: "function | optional",
      typeDef: `customNoComment?: Function`,
    },
    {
      title: "currentData",
      desc: "This functional prop can be used to obtain the current available data in the library. This data is updated after every user action like when a comment is posted, a reply is made to a comment, a comment is edited or deleted",
      utility: "function | optional",
      typeDef: `currentData={(data: any) => ()}`,
    },
    {
      title: "onSubmitAction",
      desc: "This functional prop can be used to pass your custom action to be performed after a comment is published. You can pass you custom API calls here. This prop receives a param called data, that gives the owner information when a comment is submitted. 'comId' is the ID of the comment that is submitted. 'replies' would be an empty array for now as this would be the parent comment which might have replies in future.",
      utility: "function | optional",
      typeDef: `onSubmitAction={(data: {
        userId: string
        comId: string
        avatarUrl: string
        userProfile?: string
        fullName: string
        text: string
        replies: any
      }) => ())}`,
    },
    {
      title: "onDeleteAction",
      desc: "This functional prop can be used to pass your custom action to be performed after a comment is deleted. You can pass you custom API calls here. This prop receives a param called data, that gives the owner information when a comment is deleted. 'comIdToDelete' is the ID of the comment to be deleted. And 'parentOfDeleteId' gives the ID of the parent comment if there is any. Else the parentOfDeleteId would be empty. ",
      utility: "function | optional",
      typeDef: `onDeleteAction={(data: {
        comIdToDelete: string,
        parentOfDeleteId: string
      }) => ())}`,
    },
    {
      title: "onReplyAction",
      desc: "This functional prop can be used to pass your custom action to be performed after a comment is posted as a reply to another comment. You can pass you custom API calls here. This prop receives a param called data, that gives the owner information when a comment is edited. 'parentOfRepliedCommentId' is the ID of the parent comment of the replied comment if there is any. And 'repliedToCommentId' gives the id of the comment to which the reply is made.",
      utility: "function | optional",
      typeDef: `onReplyAction={(data: {
        userId: string
        parentOfRepliedCommentId: string
        repliedToCommentId: string
        avatarUrl: string
        userProfile?: string
        fullName: string
        text: string
      }) => ())}`,
    },
    {
      title: "onEditAction",
      desc: "This prop can be used to pass your custom action to be performed after a comment is edited. You can pass you custom API calls here. This prop receives a param called data, that gives the owner information when a comment is edited. 'comId' is the ID of the comment that is edited. And 'parentOfEditedCommentId' gives the ID of the parent comment to which the edit is made if there is any. Else it would be empty.",
      utility: "function | optional",
      typeDef: `onEditAction={(data: {
        userId: string
        comId: string
        avatarUrl: string
        userProfile?: string
        fullName: string
        text: string
        parentOfEditedCommentId: string
      }) => ())}`,
    },
  ];
  return (
    <div>
      <div className="title">Props</div>
      <p>
        Following are all the props available to use with this component
        library.
      </p>
      {PropsList.map((i, index) => {
        return (
          <div style={{ margin: "40px 10px" }}>
            <b>
              {index + 1}) {i.title}
            </b>
            <br />
            <p>{i.desc}</p>
            <div> {`> ${i.utility}`}</div>
            <HighlightElement language="javascript">
              {i.typeDef}
            </HighlightElement>
          </div>
        );
      })}
    </div>
  );
};

export default Props;
