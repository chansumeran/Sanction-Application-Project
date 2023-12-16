import Navbar from "../components/navbar";
import Header from "../components/header";
const Clarityai = () => {
  // Render the Dashboard content if authenticated
  return (
    <div className="flex flex-col h-screen items-center bg-neutral">
      <Header title="Clarity AI" />

      <div
        className="flex w-8/12 h-[700px] bg-white p-20 rounded-2xl mt-6 shadow-lg"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        <h1 className="text-2xl font-semibold text-gray-700"></h1>
      </div>

      <Navbar />
    </div>
  );
};

export default Clarityai;
