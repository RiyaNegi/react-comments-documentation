const Welcome = () => {
  const codeString = "(num) => num + 1";
  return (
    <div>
      <div className="title"> Welcome</div>
      <div>
        <b>NPM : </b>
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-comments-section"
        >
          https://www.npmjs.com/package/react-comments-section
        </a>
        <br />
        <br />
        <b>Live Demo : </b>
        <a
          target="_blank"
          href="https://riyanegi.github.io/react-comments-section/"
        >
          https://riyanegi.github.io/react-comments-section/
        </a>
        <br />
        <br />
        <b>Github : </b>
        <a
          target="_blank"
          href="https://riyanegi.github.io/react-comments-section/ "
        >
          https://riyanegi.github.io/react-comments-section/
        </a>
        <p>
          <b>`react-comments-section`</b> is a simple but multi-functional react
          comment section component that helps you create comments section
          similar to youtube or instagram for your React App.
        </p>
        <p>
          {" "}
          <b>`react-comments-section`</b> is very useful for react beginners who
          want a comment section in their project but want to skip it's
          complexity. This library will give a fully functional comment section
          with the following features:
          <li>User can reply to comments </li>
          <li>User can edit their comments</li>
          <li>User can delete their comments</li>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
