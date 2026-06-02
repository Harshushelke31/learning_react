import React, { useState, useEffect } from "react";

const ToDoCRUD = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("todo"));

    if (savedData) {
      setList(savedData);
    }
  }, []);

  const save = (data) => {
    setList(data);
    localStorage.setItem("todo", JSON.stringify(data));
  };

  const submit = () => {
    if (!task.trim()) {
      alert("Enter Task");
      return;
    }

    if (edit !== null) {
      const updatedList = [...list];
      updatedList[edit] = task;
      save(updatedList);
      setEdit(null);
    } else {
      save([...list, task]);
    }

    setTask("");
  };

  const remove = (i) => {
    const newList = list.filter((item, index) => index !== i);
    save(newList);
  };

  const editTask = (i) => {
    setTask(list[i]);
    setEdit(i);
  };

  const clearAll = () => {
    if (window.confirm("Delete All Tasks?")) {
      save([]);
    }
  };

  

  return (
    <div className="container col-md-6 mt-5">
      <div className="card shadow">
        <h2 className="card-header text-center">
          ToDo App (CRUD)
        </h2>

        <div className="card-body">
          <div className="input-group mb-3">
            <input
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter Task"
            />

            <button
              onClick={submit}
              className="btn btn-success"
            >
              {edit !== null ? "Update" : "Add"}
            </button>
          </div>

          <ul className="list-group">
            {list.map((t, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {t}

                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editTask(i)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => remove(i)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {list.length > 0 && (
            <button
              className="btn btn-dark mt-3"
              onClick={clearAll}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoCRUD;