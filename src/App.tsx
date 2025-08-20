import { useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable, type Column } from "./components/DataTable/DataTable";
import { Eye, EyeOff } from "lucide-react";

interface User {
  id: number;
  name: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const users: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 29 },
  { id: 3, name: "Charlie", age: 22 },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`min-h-screen p-10 transition-colors ${
        darkMode ? "bg-gray-900 text-white " : "bg-gray-50 text-black"
      }`}
    >
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Frontend Assignment Demo</h1>
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          I have created two reusable components using React, TypeScript and
          Tailwind CSS. You can check-out the documentation on Storybook.
        </p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* InputField */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">🔹 InputField Component</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <InputField label="Default Input" placeholder="Enter text" />
          <InputField
            label="Error Input"
            placeholder="Enter email"
            invalid
            errorMessage="Invalid email"
          />
          <InputField label="Disabled Input" placeholder="Disabled" disabled />

          {/* varients */}
          <InputField
            label="Filled Variant"
            placeholder="Filled"
            variant="filled"
          />
          <InputField
            label="Outlined Variant"
            placeholder="Outlined"
            variant="outlined"
          />
          <InputField
            label="Ghost Variant"
            placeholder="Ghost"
            variant="ghost"
          />

          {/* text sizes */}
          <InputField label="Small Size" placeholder="Small" size="sm" />
          <InputField label="Medium Size" placeholder="Medium" size="md" />
          <InputField label="Large Size" placeholder="Large" size="lg" />

          {/* text clear button */}
          <div>
            <InputField
              label="With Clear Button"
              placeholder="Type something"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <button
                onClick={() => setInputValue("")}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* password toggle button */}

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md border border-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </section>

      {/* DataTable Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">🔹 DataTable Component</h2>
        <div className="space-y-12">
          <div>
            <h3 className="font-medium mb-3">Default</h3>
            <DataTable<User> data={users} columns={columns} />
          </div>
          <div>
            <h3 className="font-medium mb-3">Selectable Rows</h3>
            <DataTable<User> data={users} columns={columns} selectable />
          </div>
          <div>
            <h3 className="font-medium mb-3">Loading State</h3>
            <DataTable<User> data={[]} columns={columns} loading />
          </div>
          <div>
            <h3 className="font-medium mb-3">Empty State</h3>
            <DataTable<User> data={[]} columns={columns} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16">
        Built with React • TypeScript • TailwindCSS • Storybook
      </footer>
    </div>
  );
}

export default App;
