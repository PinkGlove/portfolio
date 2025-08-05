import Sidebar from '@/components/layout/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-[40%]">
        <h1 className="text-4xl font-bold text-center pt-20">
          Portfolio Website
        </h1>
        <p className="text-center mt-4 text-gray-600">
          Coming soon...
        </p>
      </main>
    </div>
  );
}
