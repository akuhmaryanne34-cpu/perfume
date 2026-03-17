import React from 'react'
 import AlertHeader from '../components/header/alertHeader/AlertHeader'
 import styles from"./home.module.css";
import Navbar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Categories from '../components/categories/Categories';
import ProductsSection from '../components/productcard/ProductSection';
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <AlertHeader/>
      <Navbar/>
      <Hero/>
      <Features/>
      <Categories/>
      <ProductsSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
