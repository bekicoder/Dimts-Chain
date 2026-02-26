//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;

contract RegisterParties{
   address payable public owner;
   constructor(){
           owner = payable(msg.sender);
   }

   struct parties{
      string partyName;
      string logo;
      string candidate;
      string constituency;
      string status;
      string reporting;
      string leader;
      string electionCycle;
      uint totalVotes;
      uint votePercent;
      uint seatsWon;
   } 
   mapping(string=>parties) Parties;

   function add(parties memory data) public returns(bool){
       require(owner==msg.sender,"Only the owner can add");
       Parties[data.partyName] = data;
   }
}
