# Dmoney Portal Testing Project using Postman
DMoney is a fintech project designed for transferring virtual funds. Here, the admin can create customers, agents and merchants. The users can perform transactions with some prerequisites. Different test case in this portal s have been tested in Postman.
Portal Link: https://dmoneyportal.roadtocareer.net/

## Technical scope
* Node
* Postman
* Newman
* Htmlextra

## Test case scenario
1. Admin creates an Agent, 2 random Customers, and a Merchant.
2. Deposit some money from the SYSTEM account to the Agent. (range 10 TK to 10,000 TK)
3. Agent deposits money to one of the Customers.
4. Check the Agent's balance.
5. Then, send money from one Customer to another Customer.
6. Withdraw any amount from a Customer to the Agent (range 10 TK to 10,000 TK).
7. Check the Customer's balance and transaction statement by trnxId.
8. Make a payment from the second Customer to the Merchant.
9. The second Customer checks both balance and transaction statement.
10. The Merchant checks their balance.

## How to run this project

* Clone this repository
* Open with any code editor / Command Shell
*  command npm i
*  create .env file and copy from env.template and set your own PMAT key
*  To run this project, hit "node .\report.js" or "npm start"

## Api Documentation: https://documenter.getpostman.com/view/12885463/2sB3Hhrh57

## Testcase Report: <a href= "https://docs.google.com/spreadsheets/d/1Mb8NAyLgbriY9oHq_eWT3fTnyXP__Lga/edit?usp=sharing&ouid=114143908846834533694&rtpof=true&sd=true"> Click here to see report</a>

## Bug/Improvement Report: <a href= "https://drive.google.com/file/d/1WsL2NC5cTe9pkodbTX7v1SKUk0WldqB5/view?usp=sharing"> Click here to see report</a> 
## Newman Report:

<img width="1358" height="1161" alt="screencapture-file-D-SQA-Dmoney-Assignment-on-PostMan-reports-report-html-2025-08-31-03_00_22" src="https://github.com/user-attachments/assets/d22758e7-d49e-4c84-9885-5b1a087d8a5f" />











