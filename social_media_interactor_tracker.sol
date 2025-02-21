// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialEngagementTracker {
    mapping(address => uint256) public engagementScore;
    mapping(address => uint256) public rewards;

    event EngagementUpdated(address indexed user, uint256 newScore);
    event RewardClaimed(address indexed user, uint256 amount);

    // Function to update engagement (likes, comments, shares)
    function updateEngagement(address user, uint256 score) public {
        engagementScore[user] += score;
        emit EngagementUpdated(user, engagementScore[user]);
    }

    // Function to claim rewards when engagement reaches threshold
    function claimReward() public {
        require(engagementScore[msg.sender] >= 100, "Not enough engagement points");
        
        uint256 rewardAmount = engagementScore[msg.sender] / 100; // 1 reward per 100 points
        rewards[msg.sender] += rewardAmount;
        engagementScore[msg.sender] = 0; // Reset score after claiming

        emit RewardClaimed(msg.sender, rewardAmount);
    }

    // View function to check user engagement
    function getEngagement(address user) public view returns (uint256) {
        return engagementScore[user];
    }

    // View function to check user rewards
    function getRewards(address user) public view returns (uint256) {
        return rewards[user];
    }
}
