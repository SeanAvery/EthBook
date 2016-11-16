#EthBook
Private In-Browser contact list for Ethereum payment network. <br />
Easily save send Eth to your contacts. <br />
Runs entirely in the browser! All contacts saved in local storage. <br />

## Run On Your Machine
1. git clone https://github.com/SeanAvery/EthBook.git
2. start local Ethereum node with RPC interface at port 8545 i.e. geth --rpc
3. npm run server
4. open http://localhost:8080/app/index.html on your favorite browser
5. unlock account to send eth. geth attach --> personal.unlockAccount('ACCOUNT_ADDRESS', 'YOUR_PASSWORD')

## Motivation
So you have some friends that use Ethereum. This is a simple tool to safely store contact information locally, and a wallet interface to send them Eth easily. Ideally you are chatting on a messaging protocol with end-to-end encryption. You can send eachother your public-keys and store the contacts in EthBook. You DO NOT make your public-key identity publicly known (if your friend is trustworthy...). That information is safely stored in your browser's 5MB storage . You can then use EthBook to address your friends directly by name and send them Eth!

## Warning

Use at your own risk!
