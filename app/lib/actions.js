"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateUserFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    // if any of the key is empty or undefined then delete that key
    Object.keys(updateUserFields).forEach(
      (item) => updateUserFields[item] === "" || undefined
    ) && delete updateUserFields[item];
    await User.findByIdAndUpdate(id, updateUserFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
    });
    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock } = Object.fromEntries(formData);
  try {
    connectToDB();
    const updateProductFields = {
      title,
      desc,
      price,
      stock,
    };
    // if any of the key is empty or undefined then delete that key
    Object.keys(updateProductFields).forEach(
      (item) => updateProductFields[item] === "" || undefined
    ) && delete updateProductFields[item];
    await Product.findByIdAndUpdate(id, updateProductFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};
