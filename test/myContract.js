const myContract = artifacts.require("./myContract.sol")

contract("myContract", function(accounts){
  var myContractInstance;

  it('initializes with the correct value', function(){
    return myContract.deployed().then(function(instance){
      return instance.get();
    }).then(function(Value){
        assert.equal(Value,0);
    });

  });

  it('can update the value', function(){
    return myContract.deployed().then(function(instance){
      myContractInstance = instance;
      var val = 12;
      console.log("val into number = > "+ val.toFixed()); //toFixed iis used to conver BN (hexa) to integer
      return instance.set(val);
    }).then(function(){
        return myContractInstance.get();
    }).then(function(Value){
      assert.equal(Value, 12,"set value correctly");
      console.log(Value);
    });
    
  });
});