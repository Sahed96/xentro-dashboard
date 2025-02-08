import axios from 'axios';
import { Modal } from 'antd';
import '../styles/btn.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { PiCityBold } from 'react-icons/pi';
import { SiNamecheap } from 'react-icons/si';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
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

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sort === 'asc') return a.id - b.id;
    if (sort === 'desc') return b.id - a.id;
    return 0;
  });

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
    <div className="grow">
      <div className="flex items-center gap-10 pt-3 px-8">
        <div className="flex items-center gap-4">
          {' '}
          <p>Search</p>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2"
            type="text"
          />
        </div>
        <div>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'Ascending',
                  onClick: () => setSort('asc'),
                },
                {
                  key: '2',
                  label: 'Descending',
                  onClick: () => setSort('desc'),
                },
              ],
            }}
          >
            <a onClick={e => e.preventDefault()}>
              <Space className='bg-[#3d8cd6] text-white px-4 py-2 rounded-lg'>
                Sort By
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="p-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sortedUsers.map(user => (
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
          title={selectedUser?.username}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {selectedUser && (
            <div>
              <h2><a className='font-bold mr-2'>Name :</a>{selectedUser.name}</h2>
              <p><a className='font-bold mr-2'>Email :</a>{selectedUser.email}</p>
              <p> <a className='font-bold mr-2'>Location :</a>
                {selectedUser.address?.city}, {selectedUser.address?.street},{' '}
                {selectedUser.address?.suite}, {selectedUser.address?.zipcode}
              </p>
              <p><a className='font-bold mr-2'>Phone :</a>{selectedUser.phone}</p>
              <p><a className='font-bold mr-2'>Website :</a>{selectedUser.website}</p>
              <p><a className='font-bold mr-2'>Company Name :</a>{selectedUser.company?.name}</p>
              
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
export default Users;
