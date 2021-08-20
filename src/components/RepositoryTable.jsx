function RepositoryTable({ items, selectHandler }) {
  if (!items) {
    return <></>;
  }

  return (
    <div>
      <table className="searchTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Last Commit Date</th>
            <th>Language</th>
            <th>Link on Github Page</th>
          </tr>
        </thead>
        <tbody>
          {items.map((repo) => {
            return (
              <tr key={repo.name}>
                <td>
                  <button
                    className="button-repo-name"
                    onClick={() => {
                      selectHandler(repo);
                    }}
                  >
                    {repo.name}
                  </button>
                </td>
                <td>{repo.owner.login}</td>
                <td>{repo.pushed_at}</td>
                <td>{repo.language}</td>
                <td>{repo.git_url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RepositoryTable;
