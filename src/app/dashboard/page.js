import Navbar from '../components/navbar';
import Header from '../components/header';

const Dashboard = () => {

  return (
    <div className="flex flex-col h-screen items-center bg-neutral">

        <Header title="Dashboard"/>

        <div className="flex w-8/12 h-[700px] bg-white p-20 rounded-2xl mt-6 shadow-lg"
          style={{ boxShadow: '0 10px 20px 10px rgba(134, 104, 255, 0.2)' }}>
          <h1 className="text-2xl font-semibold text-gray-700">Search for student with sanctions </h1>
        </div>
        
        <Navbar/>

    </div>
  );
};

export default Dashboard;

