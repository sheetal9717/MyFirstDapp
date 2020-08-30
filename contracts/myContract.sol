pragma solidity >=0.4.24 <0.8.0;

contract myContract {
    uint Value;

    constructor() public{
        Value = 0;
    }

    function get() public view returns(uint) {
        return Value;
    }

    function set(uint _value) public {
        Value = _value;
    }
}