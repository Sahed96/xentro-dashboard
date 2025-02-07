import axios from 'axios';
import { Modal } from 'antd';
import '../styles/btn.css';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { PiCityBold } from 'react-icons/pi';
import { SiNamecheap } from 'react-icons/si';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const showModal = id => {
    setIsModalOpen(true);
    setSelectedUser(id);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
        .then(res => {
          setSelectedUser(res.data);
        });
    }
  }, [selectedUser]);

  return (
    <div className="grow grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8">
      {users.map(user => (
        <div
          key={user.id}
          className="bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-3
          dark:bg-gray-800 dark:text-white"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="text-2xl text-gray-500">
                <FaUser />
              </div>
              <div>
                <h2 className="text-base flex items-center gap-2 font-semibold">
                  <SiNamecheap />:{user.name}
                </h2>
                <p className="text-base flex items-center gap-2">
                  <MdMarkEmailUnread />:{user.email}
                </p>
                <p className="text-base flex items-center gap-2">
                  <PiCityBold />:{user?.address?.city}
                </p>
              </div>
            </div>
            <div onClick={() => showModal(user.id)} className="del">
              <div>view profile</div>
            </div>
          </div>
        </div>
      ))}
      <Modal
        title={selectedUser?.name}
        
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedUser && (
          <div>
            <h2>{selectedUser.name}</h2>
            <p>{selectedUser.email}</p>
            <p>{selectedUser.address?.city}, {selectedUser.address?.street}, {selectedUser.address?.suite}, {selectedUser.address?.zipcode}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Users;
