import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import VehiclesTable from "../components/Admin/VehiclesTable";
import MakesTable from "../components/Admin/MakesTable";

export default function Admin() {
  return (
    <div className="bg-white text-black p-16 rounded-md">
      {/* Tabs for Models and Vehicles*/}
      <Tabs className={`flex flex-col gap-4`}>
        <TabList className={`flex gap-4`}>
          <Tab>Makes</Tab>
          <Tab>Vehicles</Tab>
        </TabList>{" "}
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
