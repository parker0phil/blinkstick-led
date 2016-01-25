var expect    = require("chai").expect;
var sinon    = require("sinon");

var Device = require("../src/device");

describe("Device", function() {

  const stubUsb = {
    getDeviceList: function(){
      return [
        {deviceDescriptor:{idVendor: 1452, idProduct: 16869}},
        {deviceDescriptor:{idVendor: 8352, idProduct: 16869}},
        {deviceDescriptor:{idVendor: 8352, idProduct: 32773}}
      ]
    }
  };

  it("ignores devices with wrong vendor ID or productId", function() {

    var usbDeviceList = sinon.spy(stubUsb, "getDeviceList");

    var device = new Device(stubUsb);

    expect(usbDeviceList.called).to.be.true;;
    expect(device.count()).to.equal(1);

  });
});

