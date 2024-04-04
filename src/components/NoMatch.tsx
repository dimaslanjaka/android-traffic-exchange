export default function NoMatch() {
  return (
    <div className="text-center dark:bg-gray-900 dark:text-gray-400">
      <h2>Nothing to see here!</h2>
      {/* show tips on development mode */}
      {location.port == '4000' && (
        <blockquote>
          <p>
            Please register the route for <b>{location.pathname}</b> at <b>src/App.tsx</b> or <b>src/index.tsx</b>
          </p>
          <p>
            <a
              href="https://github.com/remix-run/react-router/blob/add6f8aac607f78ef614176e629aa055492da999/examples/route-objects/src/App.tsx#L5-L22"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              target="_blank"
            >
              Example route object
            </a>
          </p>
        </blockquote>
      )}
      <p>
        <a href="/page">Go to the home page</a>
      </p>
    </div>
  );
}
