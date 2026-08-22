import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home";
import About from "../page/About";
import InvestmentPlans from "../page/InvestmentPlans";
import Services from "../page/Services";
import Projects from "../page/Projects";
import Team from "../page/Team";
import News from "../page/News";
import FAQ from "../page/FAQ";
import Contact from "../page/Contact";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
         {
            path: '/about',
            element: <About></About>,
        },
        {
            path: '/investment-plans',
            element: <InvestmentPlans></InvestmentPlans>,
        },
        {
            path: '/services',
            element: <Services></Services>,
        },
        {
            path: '/projects',
            element: <Projects></Projects>,
        },
        {
            path: '/team',
            element: <Team></Team>,
        },
        {
            path: '/news',
            element: <News></News>,
        },
        {
            path: '/faq',
            element: <FAQ></FAQ>,
        },
        {
            path: '/contact',
            element: <Contact></Contact>,
        }
      ]
    },
  ]);
export default router;