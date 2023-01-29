import Layout from "../Layout";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UserService, { OrderItem, User } from "../components/UserService";
import { useAuth } from "../components/AuthContext";

export default function RedeemPage() {
  const auth = useAuth();

  return (
    <Layout>
      <div className="flex justify-center md:w-3/5 mx-auto">
        <div>
          <h1 className="text-4xl font-serif mb-8">Redeem</h1>
        </div>
      </div>
    </Layout>
  );
}
