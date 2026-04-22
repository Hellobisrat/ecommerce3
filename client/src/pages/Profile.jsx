export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow rounded-xl p-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500">Name</p>
          <p className="text-xl">{user.name}</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-xl">{user.email}</p>
        </div>
      </div>
    </div>
  );
}