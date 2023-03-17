// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract VisualVault {
    uint256 transactionCount;

    struct User {
        address accountAddress;
        string name;
        string imageHash;
        string tokenKey;
        PasswordStruct[] passwords;
    }

    struct PasswordStruct {
        string siteDomain;
        string passwordHash;
    }

    mapping(address => User) private allUsers;
    mapping(address => bool) public isProfileSet;

    function savePassword(
        string memory _siteDomain,
        string memory _passwordHash
    ) public {
        // uint passwordCount = allUsers[msg.sender].passwords.length;

        allUsers[msg.sender].passwords.push(
            PasswordStruct(_siteDomain, _passwordHash)
        );
    }

    function getAllPassword() public view returns (User memory) {
        require(isProfileSet[msg.sender],"no address");
        return allUsers[msg.sender];
    }

    function addUserProfile(
        string memory _name,
        string memory _imageHash,
        string memory _tokenKey
    ) public {
        require(msg.sender != address(0));

        User storage userprofile = allUsers[msg.sender];

        userprofile.name = _name;
        userprofile.imageHash = _imageHash;
        userprofile.tokenKey = _tokenKey;

        allUsers[msg.sender] = userprofile;
        isProfileSet[msg.sender] = true;
    }
}
