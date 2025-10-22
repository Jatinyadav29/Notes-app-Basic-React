import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  }

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function changeDetails(e) {
    setDetails(e.target.value);
  }

  function deleteNote(idx) {
    let copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className="min-h-screen w-full lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex items-start gap-5 flex-col lg:w-1/2 font-mediump-10 p-10"
      >
        <h1 className="font-bold sm:text-3xl lg:text-6xl mb-5">Add Notes</h1>
        <input
          className="px-5 py-2 border-2 rounded w-full outline-none"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            changeTitle(e);
          }}
        />
        <textarea
          className="px-5 py-3 border-2 rounded h-30 w-full outline-none"
          type="text"
          placeholder="Enter Details here"
          value={details}
          onChange={(e) => {
            changeDetails(e);
          }}
        />
        <button className="text-xl w-full cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          Add notes
        </button>
      </form>
      <div className="p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="font-bold sm:text-3xl lg:text-6xl mb-5">Recent Notes</h1>
        <div className="flex flex-wrap justify-start items-start gap-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-64 w-52 pt-8.5 pb-3 px-3 bg-cover flex justify-between flex-col rounded-2xl text-black bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] overflow-auto"
              >
                <div>
                  <h3 className="p-3 rounded-2xl text-2xl leading-tight font-bold mb-2">
                    {elem.title}
                  </h3>
                  <p className="leading-tight mt-3 px-2 text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-400 cursor-pointer text-white text-xs font-bold py-1 rounded-lg hover:bg-red-600 transition ease-in-out active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
