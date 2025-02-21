// Ensure Web3 is available
if (typeof window.ethereum !== 'undefined') {
    console.log("✅ MetaMask is installed!");
} else {
    alert("🚨 MetaMask is not installed. Please install it first from https://metamask.io/");
}

// Global variables
let account;
const contractAddress = "0x52feC4E7cb411D29FE3F3fe554aBdc9B0d4618c4";  // ✅ Your contract address
const contractABI = [  // ✅ FIXED ABI
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "newScore", "type": "uint256" }
        ],
        "name": "EngagementUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
        ],
        "name": "RewardClaimed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "claimReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
        "name": "getEngagement",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
        "name": "getRewards",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "user", "type": "address" },
            { "internalType": "uint256", "name": "score", "type": "uint256" }
        ],
        "name": "updateEngagement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]; // ✅ Removed extra brackets

let web3;
let contractInstance;

// Function to connect MetaMask Wallet
async function connectWallet() {
    if (!window.ethereum) {
        alert("🚨 MetaMask not detected! Please install it from https://metamask.io/");
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (accounts.length === 0) {
            alert("⚠ No accounts found. Please unlock MetaMask.");
            return;
        }

        account = accounts[0];
        console.log("🔗 Connected Account:", account);
        document.getElementById("walletAddress").innerText = Connected: ${account};

        // Initialize Web3 & Contract
        web3 = new Web3(window.ethereum);
        contractInstance = new web3.eth.Contract(contractABI, contractAddress);
        updateUI();
    } catch (error) {
        console.error("⚠ Wallet Connection Failed:", error);
        alert("❌ Wallet connection failed. Try again.");
    }
}

// Function to update UI after wallet connection
function updateUI() {
    document.getElementById("walletAddress").style.color = "green";
}

// Function to claim rewards from contract
async function claimReward() {
    if (!account) {
        alert("⚠ Connect your wallet first!");
        return;
    }

    try {
        const result = await contractInstance.methods.claimReward().send({ from: account });
        console.log("🎉 Reward Claimed:", result);
        alert("✅ Reward claimed successfully!");
    } catch (error) {
        console.error("❌ Claim Reward Failed:", error);
        alert("⚠ Transaction failed. Check the console for details.");
    }
}

// Function to update engagement (Like, Comment, Share)
async function updateEngagement(score) {
    if (!account) {
        alert("⚠ Connect your wallet first!");
        return;
    }

    try {
        const result = await contractInstance.methods.updateEngagement(account, score).send({ from: account });
        console.log(✅ Engagement Updated: ${score}, result);
        alert(✅ Engagement updated by ${score} points!);
    } catch (error) {
        console.error("❌ Engagement Update Failed:", error);
        alert("⚠ Engagement update failed.");
    }
}

// Event Listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("claimReward").addEventListener("click", claimReward);
document.getElementById("likeButton").addEventListener("click", () => updateEngagement(1));  // ✅ Updated
document.getElementById("commentButton").addEventListener("click", () => updateEngagement(2));  // ✅ Updated
document.getElementById("shareButton").addEventListener("click", () => updateEngagement(3));  // ✅ Updated
