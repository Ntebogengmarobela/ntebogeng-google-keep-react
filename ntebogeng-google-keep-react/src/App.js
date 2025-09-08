import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {
  const notes = [
    {
      id: "a123",
      title: "some title1",
      text: "some text1",
    },
    {
      id: "a124",
      title: "some title2",
      text: "some text2",
    },
    {
      id: "a125",
      title: "some title3",
      text: "some text3",
    },
    {
      id: "a126",
      title: "some title4",
      text: "some text4",
    },
  ];
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form />
      <Notes notes={notes} />
      <Modal />
    </div>
  );
}

export default App;
