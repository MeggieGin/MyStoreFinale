$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucamber/.feature/LogInAndBuyItem.feature");
formatter.feature({
  "line": 1,
  "name": "Task 2",
  "description": "",
  "id": "task-2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Preregistered user Logs in and goes through proses of ordering an item",
  "description": "",
  "id": "task-2;preregistered-user-logs-in-and-goes-through-proses-of-ordering-an-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Registered user is on MyStore login website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is logged in with \u003cemail\u003e and \u003cpassword\u003e and gets to MyStore main profile",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Goes to MyStores main page and searches \u003cproduct\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses \u003cproduct\u003e they want to buy",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Checks if product is on a discount",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses right SIZE \u003csize\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses \u003cquantity\u003e they want to order",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Adds product to cart and goes to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fallows to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Selects \u003cAddress option\u003e and continues to shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User chooses \u003cshipping method\u003e and continues to payment method",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User chooses payment \u003cmethod\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User accepts terms of service and submits order with obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User gets Order confirmation and Makes screenshot",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 18,
      "value": "#And User goes to History and Detail of orders through profile page"
    },
    {
      "line": 19,
      "value": "#Then Program checks if shown value of the order is correct"
    },
    {
      "line": 20,
      "value": "#Then Program checks if shown status of the order is correct"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "task-2;preregistered-user-logs-in-and-goes-through-proses-of-ordering-an-item;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "product",
        "product",
        "size",
        "quantity",
        "Address option",
        "shipping method",
        "method"
      ],
      "line": 23,
      "id": "task-2;preregistered-user-logs-in-and-goes-through-proses-of-ordering-an-item;;1"
    },
    {
      "cells": [
        "a.lucy@lucky.pl",
        "elo123",
        "Hummingbird printed sweater",
        "Hummingbird printed sweater",
        "M",
        "5",
        "Main Building",
        "Pick up",
        "Check"
      ],
      "line": 24,
      "id": "task-2;preregistered-user-logs-in-and-goes-through-proses-of-ordering-an-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Preregistered user Logs in and goes through proses of ordering an item",
  "description": "",
  "id": "task-2;preregistered-user-logs-in-and-goes-through-proses-of-ordering-an-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Registered user is on MyStore login website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is logged in with a.lucy@lucky.pl and elo123 and gets to MyStore main profile",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Goes to MyStores main page and searches Hummingbird printed sweater",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses Hummingbird printed sweater they want to buy",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Checks if product is on a discount",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses right SIZE M",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses 5 they want to order",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Adds product to cart and goes to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fallows to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Selects Main Building and continues to shipping method",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User chooses Pick up and continues to payment method",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User chooses payment Check",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User accepts terms of service and submits order with obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User gets Order confirmation and Makes screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "LogAndBuy.registeredUserIsOnMyStoreLoginWebsite()"
});
formatter.result({
  "duration": 11135665653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a.lucy@lucky.pl",
      "offset": 23
    },
    {
      "val": "elo123",
      "offset": 43
    }
  ],
  "location": "LogAndBuy.userIsLoggedInWithEmailAndPassword(String,String)"
});
formatter.result({
  "duration": 1977699776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird printed sweater",
      "offset": 40
    }
  ],
  "location": "LogAndBuy.goesToMyStoresMainPage(String)"
});
formatter.result({
  "duration": 880860883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird printed sweater",
      "offset": 8
    }
  ],
  "location": "LogAndBuy.choosesProduct(String)"
});
formatter.result({
  "duration": 698169797,
  "status": "passed"
});
formatter.match({
  "location": "LogAndBuy.checksIfProductIsOnADiscount()"
});
formatter.result({
  "duration": 111205254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "LogAndBuy.choosesRightSize(String)"
});
formatter.result({
  "duration": 445015095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "LogAndBuy.choosesQuantityTheyWantToOrder(String)"
});
formatter.result({
  "duration": 457079453,
  "status": "passed"
});
formatter.match({
  "location": "LogAndBuy.addsProductToCart()"
});
formatter.result({
  "duration": 1238049194,
  "status": "passed"
});
formatter.match({
  "location": "LogAndBuy.fallowsToCheckout()"
});
formatter.result({
  "duration": 450044050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main Building",
      "offset": 8
    }
  ],
  "location": "LogAndBuy.selectsAddressOption(String)"
});
formatter.result({
  "duration": 1348539271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pick up",
      "offset": 13
    }
  ],
  "location": "LogAndBuy.userChoosesShippingMethod(String)"
});
formatter.result({
  "duration": 1488727225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check",
      "offset": 21
    }
  ],
  "location": "LogAndBuy.UserChoosesPaymentMethod(String)"
});
formatter.result({
  "duration": 120654210,
  "status": "passed"
});
formatter.match({
  "location": "LogAndBuy.userAcceptsTermsOfService()"
});
formatter.result({
  "duration": 875063735,
  "status": "passed"
});
formatter.match({
  "location": "LogAndBuy.userGetsOrderConfirmation()"
});
formatter.result({
  "duration": 849779391,
  "status": "passed"
});
});