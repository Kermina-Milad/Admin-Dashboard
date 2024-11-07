import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Team from './pages/team/Team.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Inovices from './pages/inovices/Inovices.jsx';
import Profile from './pages/profile/Profile.jsx';
import Calender from './pages/calender/Calender.jsx';
import Faq from './pages/faq/Faq.jsx';
import BarChart from './pages/bar chart/BarChart.jsx';
import PieChart from './pages/pie chart/PieChart.jsx';
import LineChart from './pages/line chart/LineChart.jsx';
import Geography from './pages/geography/Geography.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/invoices" element={<Inovices/>} />
      <Route path="/form" element={<Profile/>} />
      <Route path="/calender" element={<Calender/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/bar" element={<BarChart/>} />
      <Route path="/pie" element={<PieChart/>} />
      <Route path="/line" element={<LineChart/>} />
      <Route path="/geography" element={<Geography/>} />
     
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
