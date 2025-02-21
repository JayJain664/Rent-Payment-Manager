# social_media_interaction_tracker
# 📊 Social Media Engagement Tracker

A simple *Solidity smart contract* that tracks social media engagement (likes, comments, shares) and rewards users based on their activity. This contract is deployed on *Edu Chain*.

## 🌟 Features

✅ *Track Engagement*: Store user interactions (likes, comments, shares).  
✅ *Claim Rewards*: Users receive rewards when engagement points reach a threshold.  
✅ *Transparent & Secure*: Uses blockchain for verifiable engagement tracking.  
✅ *No Constructor Needed*: No input required during deployment.  
✅ *View Functions*: Check engagement scores and rewards anytime.

## 🔗 Deployed Smart Contract

- *Network*: Edu Chain  
- *Contract Address*: 0xE6959a4531145d52B04d40cf7B621768cDF024D3

## 🚀 How It Works

1. *Update Engagement*:  
   - Admin updates user engagement scores via updateEngagement(address user, uint256 score).  

2. *Check Scores & Rewards*:  
   - getEngagement(address user) → View engagement points.  
   - getRewards(address user) → View total earned rewards.  

3. *Claim Rewards*:  
   - Users with 100+ points can claim rewards using claimReward().  
   - Engagement resets after claiming.

## 🛠 Future Improvements

- 🔗 *Automated Social Media API Integration*  
- 💰 *Reward System with ERC-20 Tokens*  
- 🛡 *Admin Role for Secure Updates*  
- 🎯 *Leaderboard for Top Engagers*  

## 📜 License

This project is open-source under the *MIT License*.

---

🔗 *Follow for more updates!* 🚀
