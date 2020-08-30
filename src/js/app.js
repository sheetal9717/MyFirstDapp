App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  loading: false,
  myContractInstance: null,

  init: function(){
    return App.initWeb3()
    // await App.initContracts()
    // await App.render()
  },

  // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },


  initContract: function(){
    $.getJSON("myContract.json", function(myContract){
      App.contracts.myContract = TruffleContract(myContract);
      App.contracts.myContract.setProvider(App.web3Provider);
      return App.render();

    });
},

  render: function(){
    // Prevent double render
    var myContractInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Set the current blockchain account
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#account").html(account);
      }
    });
    loader.hide();
    content.show();
    App.setLoading(false)
  },

  set: function(){
    
    $("#button").click(function(){
        App.contracts.myContract.deployed().then(function(instance){
        instance.set($('#value1').val());
        window.alert('Value updated! Refresh this page to see the new value (it might take a few seconds).');
        });
        console.log("value : "+ $('#value1').val());
      });
  },


  get: function(){
    // App.setLoading(false);
    $("#button1").click(function(){
      console.log("inside get");
      App.contracts.myContract.deployed().then(function(instance){
        instance.get().then(function(res){
          console.log(res);
          document.getElementById("detail").innerHTML = res;
        });
    
    });
  });
},

  setLoading: (boolean) => {
    App.loading = boolean
    const loader = $('#loader')
    const content = $('#content')
    if (boolean) {
      loader.show()
      content.hide()
    } else {
      loader.hide()
      content.show()
    }
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
