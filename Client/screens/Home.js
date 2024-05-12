import { StyleSheet } from "react-native";
import React from "react";
import Layouts from "../components/Layout/Layouts";
import Categories from "../components/category/Categories";
import Banner from "../components/banner/Banner";
import Products from "../components/products/Products";
import Header from "../components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "../redux/features/auth/userAction";
// import { CategoriesData } from "../data/CategoriesData";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <Layouts>
      <Header />
      <Categories />
      <Banner />
      <Products />
    </Layouts>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
