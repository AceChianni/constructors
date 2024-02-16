"use strict";

// Constructor function for Television
function Television() {
  this.powerStatus = false;
  this.currentChannel = 1;
}

// Method to turn the TV on
Television.prototype.turnOn = function () {
  if (!this.powerStatus) {
    this.powerStatus = true;
    console.log("TV is now ON.");
  } else {
    console.log("TV is already ON.");
  }
};

// Method to turn the TV off
Television.prototype.turnOff = function () {
  if (this.powerStatus) {
    this.powerStatus = false;
    console.log("TV is now OFF.");
  } else {
    console.log("TV is already OFF.");
  }
};

// Method to change the channel
Television.prototype.changeChannel = function (newChannel) {
  if (this.powerStatus) {
    this.currentChannel = newChannel;
    console.log("Channel changed to " + newChannel);
  } else {
    console.log("Cannot change channel, TV is off.");
  }
};

// Method to get and log the TV's state
Television.prototype.getState = function () {
  console.log("Power Status: " + (this.powerStatus ? "ON" : "OFF"));
  console.log("Current Channel: " + this.currentChannel);
};

// Create multiple Television instances
const livingRoomTV = new Television();
const bedroomTV = new Television();
const kidsTV = new Television();

// Display initial states
console.log("Initial States:");
livingRoomTV.getState();
bedroomTV.getState();
kidsTV.getState();

// Turn on and set channels for each TV
livingRoomTV.turnOn();
livingRoomTV.changeChannel(5);

bedroomTV.turnOn();
bedroomTV.changeChannel(2);

kidsTV.turnOn();
kidsTV.changeChannel(8);

// Display updated states
console.log("\nUpdated States:");
livingRoomTV.getState(); // Power Status: ON, Current Channel: 5
bedroomTV.getState(); // Power Status: ON, Current Channel: 2
kidsTV.getState(); // Power Status: ON, Current Channel: 8
