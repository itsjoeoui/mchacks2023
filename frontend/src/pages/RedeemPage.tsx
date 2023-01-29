import Layout from "../Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService, {
  Inventory,
  OrderItem,
  RewardType,
  User,
} from "../components/UserService";
import { useAuth } from "../components/AuthContext";
import { FaCoins, FaHamburger } from "react-icons/fa";
import { FiTag } from "react-icons/fi";

export default function RedeemPage() {
  const auth = useAuth();
  const [inventory, setInventory] = useState<Inventory>();

  useEffect(() => {
    UserService.Inventory.details(1).then((data) => {
      setInventory(data);
    });
  }, []);

  let content;
  if (!auth || !inventory) {
    content = <div>Loading...</div>;
  } else {
    return (
      <Layout>
        <div>
          <h1 className="text-4xl font-serif mb-8">Redeem</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inventory.items.map((item, i) => (
              <div
                key={i}
                className="border border-black flex justify-center items-center p-8"
              >
                <div className="flex flew-col gap-3">
                  {(() => {
                    let icon;
                    switch (item.rewardType) {
                      case RewardType.Coin:
                        icon = <FaCoins size={30} />;
                        break;
                      case RewardType.Coupon:
                        icon = <FiTag size={30} />;
                        break;
                      case RewardType.Food:
                        icon = <FaHamburger size={30} />;
                        break;
                      default:
                        icon = <FiTag size={30} />;
                        break;
                    }
                    return icon;
                  })()}
                  <h2 className="text-2xl">{item.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
