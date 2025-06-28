import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filtered = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <Card title="Task Manager">
      <div className="flex space-x-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="space-x-2 mb-4">
        <Button onClick={() => setFilter('All')} variant={filter === 'All' ? 'primary' : 'secondary'}>All</Button>
        <Button onClick={() => setFilter('Active')} variant={filter === 'Active' ? 'primary' : 'secondary'}>Active</Button>
        <Button onClick={() => setFilter('Completed')} variant={filter === 'Completed' ? 'primary' : 'secondary'}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filtered.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <span
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button onClick={() => deleteTask(task.id)} variant="danger">X</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
