import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Blogs = () => {
  const rawHtml1 = `<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>`;
  const rawHtml2 = `<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>`;
  return (
    <div
      tabIndex="0"
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm"
    >
      <PageTitle title="Blogs" />
      <div className="collapse-title text-xl font-medium">
        1. How will you improve the performance of a React Application?
      </div>
      <div className="collapse-content">
        <p>
          By default, React includes many helpful warnings. These warnings are
          very useful in development. However, they make React larger and slower
          so you should make sure to use the production version when you deploy
          the app.
        </p>
        <ul className="list-disc m-8">
          <li className="mb-4">
            If we build our Projects Using
            <code className="bg-gray-100 rounded-lg px-2 py-1">
              Creat React App
            </code>
            then we can use
            <code className="bg-gray-100 rounded-lg px-2 py-1">
              npm run build
            </code>
            to create a optimized production build of our app.
          </li>
          <li className="mb-4">
            React offer production-ready versions of React and React DOM as
            single files: <br />
            <code className="bg-gray-100 rounded-lg px-2 py-1">{rawHtml1}</code>
            <br />
            <code className="bg-gray-100 rounded-lg px-2 py-1">{rawHtml2}</code>
            <br />
            using this 2 script we can optimize React App Performance
          </li>
          <li className="mb-4">
            For the most efficient Browserify production build, install a few
            plugins: like as
            <code className="bg-gray-100 rounded-lg px-2 py-1">
              envify, uglifyify , teser
            </code>
          </li>
          <li className="mb-4">
            Webpack v4+ will minify our code by default in production mode by
            using
            <code className="bg-gray-100 rounded-lg px-2 py-1">
              TerserPlugin
            </code>
            But we shouldn’t apply <code className="bg-gray-100 rounded-lg px-2 py-1">
              TerserPlugin
            </code> in development because it will hide useful React warnings, and make the builds much slower.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
