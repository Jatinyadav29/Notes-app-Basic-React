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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          My Notes App
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Add Notes Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
                Add New Note
              </h2>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Note Title
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                    type="text"
                    placeholder="Enter note title..."
                    value={title}
                    onChange={(e) => {
                      changeTitle(e);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Note Details
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none"
                    rows="4"
                    placeholder="Enter note details..."
                    value={details}
                    onChange={(e) => {
                      changeDetails(e);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Add Note
                </button>
              </form>
            </div>
          </div>

          {/* Notes Display */}
          <div className="animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
                Your Notes
              </h2>
              <div className="space-y-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {task.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 opacity-50">📝</div>
                    <p className="text-gray-400 text-lg">
                      No notes yet. Create your first note!
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {task.map(function (elem, idx) {
                      return (
                        <div
                          key={idx}
                          className="group bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                          style={{
                            animationDelay: `${idx * 0.1}s`,
                          }}
                        >
                          <div className="flex flex-col h-full">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                {elem.title}
                              </h3>
                              <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                {elem.details}
                              </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <button
                                onClick={() => {
                                  deleteNote(idx);
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
