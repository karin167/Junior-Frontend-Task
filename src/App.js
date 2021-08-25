import "./App.css";
import ModalRepository from "./components/ModalRepository";
import RepositoryTable from "./components/RepositoryTable";
import { useState } from "react";

export default function App() {
  const [results, setResults] = useState(false);
  const [selectedRepository, setSelectedRepository] = useState(false);
  const clearSelectedRepositoryHandler = () => setSelectedRepository(null);
  //first fetch- the click on search box -calls fetchRepositoris() ->
  //it returns the list  of repository from GitHub.
  const fetchRepositories = (searchTerm) => {
    fetch(`https://api.github.com/search/repositories?q=${searchTerm}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("response1:", response);
        return response.json(); // HTTP response
      })
      .then(function (data) {
        // JSON
        console.log("result:", data);
        setResults(data);
      })
      .catch((error) => console.warn(error));
  };

  //second fetch- when you are click on name-  calls setCurrentRepository() -> give us a the ditails from contributors_url

  const setCurrentRepository = (repository) => {
    fetch(repository.contributors_url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log("Contributors Results:", response);
        return response.json(); // HTTP response
      })
      .then(function (contributors) {
        repository.contributors = contributors;
        //just for see it on console- only!!!!
        // console.log("Setting Contributors Results:", contributors);
        setSelectedRepository(repository);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <div data-testid="wrap-div" className="App">
      <ModalRepository
        repository={selectedRepository}
        closeModalHandler={clearSelectedRepositoryHandler}
      />
      <div className="Search-And-Label">
        <label title="label">
          Enter search term:
          <input
            id="search"
            type="text"
            placeholder="write something here..."
          />
        </label>

        <button
          onClick={() => {
            fetchRepositories(document.getElementById("search").value);
          }}
        >
          Search
        </button>
      </div>
      <RepositoryTable
        // passing items to RepositoryTable Because RepositoryTableis Showing items
        items={results.items}
        selectHandler={(repo) => setCurrentRepository(repo)}
        // if the user clicks on a Repository name, the repository details will be shown in a modal
      />
    </div>
  );
}
