import * as React from "react"
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'
import '../styles/global.css'
import FirstSection from '../components/homeComponents/FirstSection'
import MeetTheTeam from "../components/homeComponents/MeetTheTeam";
import ServicesBanner from '../components/homeComponents/ServicesBanner'
import Testimonials from "../components/homeComponents/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Penthara</title>
      </Helmet>
      <FirstSection />
      <MeetTheTeam />
      <ServicesBanner />
      <Testimonials />
    </Layout>
  )
}

export default Home
