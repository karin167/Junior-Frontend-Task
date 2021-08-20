import "./App.css";
import ModalRepository from "./components/ModalRepository";
import RepositoryTable from "./components/RepositoryTable";
import { useState } from "react";

export default function App() {
  const [results, setResults] = useState(false);
  const [selectedRepository, setSelectedRepository] = useState(false);
  const clearSelectedRepositoryHandler = () => setSelectedRepository(null);

  const fetchRepositories = (searchTerm) => {
    fetch(`https://api.github.com/search/repositories?q=${searchTerm}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("response:", response);
        return response.json(); // HTTP response
      })
      .then(function (data) {
        // JSON
        console.log("result:", data);
        setResults(data);
      })
      .catch((error) => console.warn(error));
  };

  const setCurrentRepository = (repository) => {
    fetch(repository.contributors_url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("Contributors Results:", response);
        return response.json(); // HTTP response
      })
      .then(function (contributors) {
        repository.contributors = contributors;
        console.log("Setting Contributors Results:", contributors);
        setSelectedRepository(repository);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <div id="appId" className="App">
      <ModalRepository
        repository={selectedRepository}
        closeModalHandler={clearSelectedRepositoryHandler}
      />
      <div className="Search-And-Label">
        <label>
          Enter search term:
          <input id="search" type="text" />
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
