export enum RewardType {
  Coupon,
  Food,
  Coin,
}

export class Item {
  name: string;
  rewardType: RewardType;
}
