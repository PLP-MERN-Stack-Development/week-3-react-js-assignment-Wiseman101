import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
<Button onClick={toggleTheme}>
  {dark ? '☀️ Light' : '🌙 Dark'}
</Button>

