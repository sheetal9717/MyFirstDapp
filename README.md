# MyFirstDapp: 
This disrtibuted application get the data from user and then stored it on the blockchain. User can get the entered data from blockchain.

Installation:  
1) Ganache (Personal Blockchain)  
2) Metamask (Ethereum Wallet)  
3) Truffle
4) web3
5) Node.js


How to Run:
1) start the ganache personal Blockchain
2) Migrate the smart contract to personal blockcahin using:  
$ truffle migrate --resert
3) Run lite-server using:  
$npm run dev    
<br>

NOTE:  
It will open a new browser window with http://localhost:3000      
As you have installed metamask and created metamask account, do following steps:    
  i) Add RPC server url(shown in ganache) to metamask using custom RPC option (given in metamask).     
  ii) Go to metamask setting and import one of the ganache accounts to the metamask. 
  <br>   
  for more detail refer to the below link :  
  https://medium.com/@kacharlabhargav21/using-ganache-with-remix-and-metamask-446fe5748ccf#:~:text=Open%20your%20accounts%20by%20clicking,account%20address%20and%20private%20key.<br>

4) You can enter any integer value and perform metamask transaction.
5) You can get the value by clicking on "Get Value" button.
