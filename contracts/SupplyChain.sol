// SupplyChainAdvanced.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@router-protocol/nitro-eth-connector/contracts/Routing.sol";

contract SupplyChainAdvanced is Routing {
    address public owner;

    enum SupplyChainState {
        Created,
        InTransit,
        Delivered
    }

    struct Item {
        string name;
        uint256 quantity;
        SupplyChainState state;
        address sender;
        address carrier;
        address recipient;
    }

    mapping(uint256 => Item) public items;
    uint256 public itemCount;

    event ItemCreated(uint256 itemId, string name, uint256 quantity, address sender);
    event ItemInTransit(uint256 itemId, address carrier);
    event ItemDelivered(uint256 itemId, address recipient);
    event TransferToChain(uint256 itemId, uint256 amount);

    // Dodatkowe zmienne związane z Router Nitro
    address public router;
    uint256 public chainId;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier itemExists(uint256 itemId) {
        require(itemId <= itemCount, "Item does not exist");
        _;
    }

    modifier inState(uint256 itemId, SupplyChainState state) {
        require(items[itemId].state == state, "Invalid state");
        _;
    }

    modifier onlySender(uint256 itemId) {
        require(msg.sender == items[itemId].sender, "Only the sender can call this function");
        _;
    }

    modifier onlyCarrier(uint256 itemId) {
        require(msg.sender == items[itemId].carrier, "Only the carrier can call this function");
        _;
    }

    modifier onlyRecipient(uint256 itemId) {
        require(msg.sender == items[itemId].recipient, "Only the recipient can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setRouter(address _router, uint256 _chainId) external onlyOwner {
        router = _router;
        chainId = _chainId;
    }

    function createItem(string memory _name, uint256 _quantity, address _recipient) external {
        itemCount++;
        items[itemCount] = Item({
            name: _name,
            quantity: _quantity,
            state: SupplyChainState.Created,
            sender: msg.sender,
            carrier: address(0),
            recipient: _recipient
        });

        emit ItemCreated(itemCount, _name, _quantity, msg.sender);
    }

    function markInTransit(uint256 itemId) external onlySender(itemId) itemExists(itemId) inState(itemId, SupplyChainState.Created) {
        items[itemId].state = SupplyChainState.InTransit;
        items[itemId].carrier = msg.sender;
        emit ItemInTransit(itemId, msg.sender);
    }

    function markDelivered(uint256 itemId) external onlyCarrier(itemId) itemExists(itemId) inState(itemId, SupplyChainState.InTransit) {
        items[itemId].state = SupplyChainState.Delivered;
        emit ItemDelivered(itemId, items[itemId].recipient);
    }

    function transferToChain(uint256 itemId, uint256 amount) external onlyOwner {
        // Sprawdź, czy przedmiot istnieje
        require(itemId <= itemCount, "Item does not exist");

        // Transfer aktywów do innego łańcucha za pomocą Router Nitro
        transferOut(router, chainId, address(this), amount);

        // Dodaj logikę związaną z transferem na drugim łańcuchu (np. zaktualizuj status przedmiotu)
        // ...

        // Emituj zdarzenie o transferze
        emit TransferToChain(itemId, amount);
    }

    // Dodatkowe funkcje:

    function getSender(uint256 itemId) external view returns (address) {
        return items[itemId].sender;
    }

    function getCarrier(uint256 itemId) external view returns (address) {
        return items[itemId].carrier;
    }

    function getRecipient(uint256 itemId) external view returns (address) {
        return items[itemId].recipient;
    }
}
