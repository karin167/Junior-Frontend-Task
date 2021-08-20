import Modal from "react-modal";
function ModalRepository({ repository, closeModalHandler }) {
  if (!repository) {
    return <></>;
  }

  const contributors = repository.contributors;

  return (
    <Modal isOpen={true} contentLabel="Example Modal" ariaHideApp={false}>
      <p>Name: {repository.name}</p>
      <img src={repository.owner.avatar_url} height="50px" />
      <p>Description: {repository.description}</p>
      <p>Topics: {repository.topics}</p>
      <p>Starts count: {repository.stargazers_count}</p>
      <p>Contributors</p>
      <table className="modalTable">
        <thead>
          <tr>
            <th>Contributor Name</th>
            <th>Avatar</th>
            <th>Github page link</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor) => {
            return (
              <tr key={contributor.login}>
                <td>{contributor.login}</td>
                <td>
                  <img
                    height="50"
                    width="50"
                    src={contributor.avatar_url}
                  ></img>
                </td>
                <td>{contributor.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={closeModalHandler}>close</button>

      <br></br>
    </Modal>
  );
}

export default ModalRepository;
