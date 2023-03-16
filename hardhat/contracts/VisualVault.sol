// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
pragma abicoder v2;

contract VisualVault {
    uint256 transactionCount;

    struct User {
        address accountAddress;
        string name;
        string tokenURI;
        PasswordStruct[] passwords;
    }

    struct PasswordStruct {
        string siteDomain;
        string passwordHash;
    }

    mapping(address => User) internal allUsers;
    mapping(address => bool) public isProfileSet;

    function savePassword(
        string memory _siteDomain,
        string memory _tokenURI
    ) public {
        require(isProfileSet[msg.sender], "no address");
        // uint passwordCount = allUsers[msg.sender].passwords.length;
        bytes32 unique = hash(_tokenURI);
        string memory _passwordHash = bytes32ToString(unique);
        allUsers[msg.sender].passwords.push(
            PasswordStruct(_siteDomain, _passwordHash)
        );
    }

    function getUserInfo(
        address userAddress
    ) public view returns (User memory) {
        require(isProfileSet[userAddress], "no address");
        return allUsers[userAddress];
    }

    function addUserProfile(
        string memory _name,
        string memory _tokenURI
    ) public {
        require(msg.sender != address(0));

        User storage userprofile = allUsers[msg.sender];

        userprofile.accountAddress = msg.sender;

        userprofile.name = _name;
        userprofile.tokenURI = _tokenURI;

        allUsers[msg.sender] = userprofile;
        isProfileSet[msg.sender] = true;
    }

    function bytes32ToString(
        bytes32 _bytes32
    ) public pure returns (string memory) {
        uint8 i = 0;
        bytes memory bytesArray = new bytes(64);
        for (i = 0; i < bytesArray.length; i++) {
            uint8 _f = uint8(_bytes32[i / 2] & 0x0f);
            uint8 _l = uint8(_bytes32[i / 2] >> 4);

            bytesArray[i] = toByte(_f);
            i = i + 1;
            bytesArray[i] = toByte(_l);
        }
        return string(bytesArray);
    }

    function toByte(uint8 _uint8) public pure returns (bytes1) {
        if (_uint8 < 10) {
            return bytes1(_uint8 + 48);
        } else {
            return bytes1(_uint8 + 87);
        }
    }

    function hash(string memory _cidURI) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_cidURI));
    }
}
