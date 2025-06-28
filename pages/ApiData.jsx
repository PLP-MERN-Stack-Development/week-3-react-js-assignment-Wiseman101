import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
        if (!res.ok) throw new Error('API failed 😢');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const filtered = data.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card title="Fetched Posts">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full px-3 py-2 mb-4 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-blue-500">Loading posts...</p>}
      {error && <p className="text-red-500">❌ {error}</p>}

      {!loading && !error && (
        <ul className="space-y-4">
          {filtered.map(post => (
            <li key={post.id} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex justify-between">
        <Button onClick={() => setPage(prev => Math.
