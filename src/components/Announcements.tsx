"use client";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-azsh-purple-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Parent's Teacher Meeting</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste
            architecto, necessitatibus facilis </p>
        </div>
        <div className="bg-azsh-sky-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Parent's Teacher Meeting</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste
            architecto, necessitatibus facilis </p>
        </div>
        <div className="bg-azsh-yellow-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Parent's Teacher Meeting</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste
            architecto, necessitatibus facilis </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
