import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import VehiclesTable from "../components/Admin/VehiclesTable";
import MakesTable from "../components/Admin/MakesTable";
import Input from "../components/UI/Input";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-white text-black p-16 rounded-md mb-20 flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        <div className="flex flex-col gap-2 text-center md:text-start text-red-500 font-bold">
          <p>This page is protected.</p>
          <p>Please enter the password to view the content.</p>
          <p>The data is stored locally in the browser and is not persisted.</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-2"
        >
          <div className="hidden">
            <Input
              label="Username"
              id="username"
              name="username"
              type="text"
              className="input input-primary"
              autoComplete="username"
            />
          </div>
          <Input
            label="Password"
            id="password"
            name="password"
            error={error}
            type="password"
            value={password}
            className="input input-primary w-auto"
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white text-black p-1 lg:p-16 rounded-md mb-20">
      <Tabs className={`flex flex-col gap-4`}>
        <TabList className={`flex gap-4`}>
          <Tab>Makes</Tab>
          <Tab>Vehicles</Tab>
        </TabList>
        <TabPanel>
          <MakesTable />
        </TabPanel>
        <TabPanel>
          <VehiclesTable />
        </TabPanel>
      </Tabs>
    </div>
  );
}
