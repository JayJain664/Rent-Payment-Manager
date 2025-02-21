// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RentPaymentManager {
    address public landlord = msg.sender;
    address public tenant;
    uint256 public rentAmount = 1 ether;
    uint256 public dueDate = block.timestamp + 30 days;
    uint256 public lateFee = 0.1 ether;
    bool public isPaid;
    
    function setTenant(address _tenant) external {
        require(tenant == address(0), "Tenant already set");
        tenant = _tenant;
    }

    function payRent() external payable {
        require(msg.sender == tenant, "Only tenant can pay");
        require(msg.value >= rentAmount + (block.timestamp > dueDate ? lateFee : 0), "Incorrect amount");
        isPaid = true;
        payable(landlord).transfer(msg.value);
    }
}
