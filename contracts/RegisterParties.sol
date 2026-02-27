//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;

contract RegisterParties{
   address payable public immutable owner;
   uint public totallVotes;
   constructor(){
           owner = payable(msg.sender);
   }
   
   struct Parties_{
      uint totalVotes;
      uint seatsWon;
      string MetaData;
   } 
   mapping(string=>Parties_) Parties;
   event AddedParty(string indexed partyName);
   function add(string calldata name,string calldata url) external{
       require(owner==msg.sender,"Only the owner can add");
       Parties[name].MetaData = url;
   }
}
