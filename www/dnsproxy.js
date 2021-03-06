// Empty constructor
function DnsProxy() {}

DnsProxy.prototype.activate = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'DnsProxy', 'activate');
}

DnsProxy.prototype.deactivate = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'DnsProxy', 'deactivate');
}

DnsProxy.prototype.config = function(option, successCallback, errorCallback) {
    var options = {};
    options.dnsServer = option.dnsServer;
    options.port = option.port;
    options.VPNSessionTitle = option.VPNSessionTitle;
    cordova.exec(successCallback, errorCallback, 'DnsProxy', 'config', [options]);
}

DnsProxy.prototype.addEDNSOption = function(optionCode, message, successCallback, errorCallback) {
    var options = {};
    options.optionCode = optionCode;
    options.message = message;
    cordova.exec(successCallback, errorCallback, 'DnsProxy', 'addEDNSOption', [options]);
}

DnsProxy.prototype.removeAllEDNSOption = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'DnsProxy', 'removeAllEDNSOption');
}

DnsProxy.prototype.isActivated = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'DnsProxy', 'isActivated');
}

// Installation constructor that binds DnsProxy to window
DnsProxy.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.dnsProxy = new DnsProxy();
  return window.plugins.dnsProxy;
};
cordova.addConstructor(DnsProxy.install);
