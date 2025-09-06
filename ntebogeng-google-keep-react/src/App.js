
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form />
      <Notes />
      <Modal />

     {/* Navbar
     Sidebar
     Form
     Notes
     Modal */}
    </div>
  );
}

export default App;
