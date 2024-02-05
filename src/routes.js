

import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import SupplyChain from "EcoChainComponents/SupplyChain.js";
import RouterIntegration from "EcoChainComponents/RouterIntegration.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  // New routes for EcoChain components
  {
    path: "/supply-chain",
    name: "Router integration",
    icon: "nc-icon nc-delivery-fast",
    component: SupplyChain,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
