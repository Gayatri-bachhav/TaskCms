
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api';

const SectionManager = () => {
  const { section } = useParams();
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await API.get(`/${section}`);
    setItems(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await API.put(`/${section}/${editId}`, { ...form });
    } else {
      await API.post(`/${section}`, { ...form });
    }
    setForm({ title: '', description: '' });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, description: item.description });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await API.delete(`/${section}/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [section]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Manage {section.toUpperCase()} Section</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'} Content
        </button>
      </form>

      <ul className="space-y-4">
        {items.map(item => (
          <li key={item._id} className="border p-4 rounded shadow">
            <h4 className="font-semibold">{item.title}</h4>
            <p>{item.description}</p>
            <div className="mt-2 space-x-2">
              <button onClick={() => handleEdit(item)} className="bg-yellow-500 px-3 py-1 rounded text-white">Edit</button>
              <button onClick={() => handleDelete(item._id)} className="bg-red-600 px-3 py-1 rounded text-white">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionManager;

