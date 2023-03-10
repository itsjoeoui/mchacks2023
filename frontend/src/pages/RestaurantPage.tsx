import Layout from "../Layout";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserService, { OrderItem, User } from "../components/UserService";
import { useAuth } from "../components/AuthContext";
import { FiPlus } from "react-icons/all";
import { RestaurantAddButton } from "../components/resto/RestaurantAddButton";

export default function RestaurantPage() {
  let { id } = useParams();
  const auth = useAuth();

  const [orders, setOrders] = useState<OrderItem[]>();
  const addToOrder = (title: string, i: number) => {
    setOrders([...(orders || []), { name: title, menuId: i + 1 }]);
  };

  return (
    <Layout>
      <div className="flex justify-center md:w-3/5 mx-auto">
        <div>
          <h1 className="text-4xl font-serif mb-8">{id}</h1>
          <h2 className="text-3xl font-serif mb-2">Menu</h2>

          <div className="flex flex-col">
            {[
              "Roll Californie à la française",
              "Poutine boeuf shawarma à la française",
              "Poulet thai avec du riz au chou fleur à la française",
            ].map((title, i) => (
              <div
                key={i}
                className="border-b border-black last:border-b-0 py-4"
              >
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p>
                  Dolor, sit amet consectetur adipisicing elit. Quia blanditiis
                  qui exercitationem odit provident debitis corporis pariatur
                  minus saepe, eum ipsa doloribus dolorum similique id, ratione
                  vero quibusdam molestiae! Dolore? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Enim nemo, cum unde molestias
                  dolor vitae blanditiis nam illo nulla maxime rerum non? Sint
                  rem asperiores, alias sapiente necessitatibus blanditiis
                  rerum.
                </p>

                <RestaurantAddButton
                  title={title}
                  key={i}
                  id={i}
                  addToOrder={addToOrder}
                />
                {/* <FiPlus
                  size={30}
                  className="float-right mt-4 hover:bg-gray-200 rounded-md transition duration-150 p-1 cursor-pointer"
                  onClick={() =>
                    setOrders([
                      ...(orders || []),
                      { name: title, menuId: i + 1 },
                    ])
                  }
                /> */}
              </div>
            ))}
          </div>

          {orders ? (
            <div>
              <h2 className="text-3xl font-serif mb-2">Order</h2>

              <div className="">
                {orders.map((item, i) => (
                  <div key={i}>
                    <h3>{item.name}</h3>
                  </div>
                ))}
              </div>

              <button
                className="mt-4 rounded bg-black w-full text-white p-2 font-bold"
                onClick={async () => {
                  await UserService.Menu.order(auth as User, orders);
                  location.pathname = "/";
                }}
              >
                Order
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
