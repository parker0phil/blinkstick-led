function Device(usb) {
    const VENDOR_ID = 8352;
    const PRODUCT_ID = 16869;

    var devices = usb.getDeviceList().filter( function(next){
        return next.deviceDescriptor.idVendor === VENDOR_ID &&
            next.deviceDescriptor.idProduct === PRODUCT_ID;
    });

    this.count = function(){
        return devices.length;
    }
}
module.exports = Device;