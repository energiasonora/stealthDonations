// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// mint example:
// alice pubkey : 0x027fc1ccacb40c45f01901eef21a0436064719a39c142b05d813bfbbc541c5b785
// _goal 330000000000000000
// _durationInDays: 
contract StealthDonations is ERC721, Ownable {
    using ECDSA for bytes32;

    // Struct to represent a donation campaign
    struct Campaign {
        // address recipient; // Recipient's primary wallet (optional, for withdrawal)
        bytes recipientPublicKey; // Recipient's public key for stealth address derivation
        uint goal; // Funding goal
        uint deadline; // Campaign deadline
        uint raisedAmount; // Total amount raised (tracked off-chain)
        string encryptedMetadata; // Encrypted metadata (e.g., additional info for donors)
    }

    // Mapping from token ID to campaign details
    mapping(uint256 => Campaign) public campaigns;

    // Token ID counter
    uint256 public nextTokenId;

    // Events
    event CampaignCreated(uint256 indexed tokenId, address indexed creator, uint goal, uint deadline);
    // event CampaignCreated(uint256 indexed tokenId, address indexed creator, address indexed recipient, uint goal, uint deadline);
    event CampaignRenewed(uint256 indexed tokenId, uint newGoal, uint newDeadline);

    /**
     * @dev Constructor initializes the ERC721 and Ownable contracts.
     */
    constructor() ERC721("StealthDonations", "SDON") Ownable(msg.sender) {}

/**
 * @dev Creates a new donation campaign and mints an NFT for it.
 * @param _recipientPublicKey The recipient's public key for stealth address derivation.
 * @param _goal The funding goal for the campaign.
 * @param _durationInDays The duration of the campaign in days.
 * @param _encryptedMetadata Encrypted metadata for the campaign (optional).
 */
function createCampaign(
    bytes memory _recipientPublicKey,
    uint _goal,
    uint _durationInDays,
    string memory _encryptedMetadata
) external payable {
    require(_recipientPublicKey.length == 33 || _recipientPublicKey.length == 65, "Invalid public key format");

    uint256 tokenId = nextTokenId++;
    _safeMint(msg.sender, tokenId);

    Campaign storage campaign = campaigns[tokenId];
    campaign.recipientPublicKey = _recipientPublicKey;
    campaign.goal = _goal;
    campaign.deadline = block.timestamp + (_durationInDays * 1 days);
    campaign.encryptedMetadata = _encryptedMetadata;

    emit CampaignCreated(tokenId, msg.sender, _goal, campaign.deadline);
}
    // /**
    //  * @dev Creates a new donation campaign and mints an NFT for it.
    //  * @param _recipient The recipient's primary wallet address (optional).
    //  * @param _recipientPublicKey The recipient's public key for stealth address derivation.
    //  * @param _goal The funding goal for the campaign.
    //  * @param _durationInDays The duration of the campaign in days.
    //  * @param _encryptedMetadata Encrypted metadata for the campaign (optional).
    //  */
    // function createCampaign(
    //     address _recipient,
    //     bytes memory _recipientPublicKey,
    //     uint _goal,
    //     uint _durationInDays,
    //     string memory _encryptedMetadata
    // ) external payable {
    //     require(_recipientPublicKey.length == 33 || _recipientPublicKey.length == 65, "Invalid public key format");

    //     uint256 tokenId = nextTokenId++;
    //     _safeMint(msg.sender, tokenId);

    //     Campaign storage campaign = campaigns[tokenId];
    //     campaign.recipient = _recipient;
    //     campaign.recipientPublicKey = _recipientPublicKey;
    //     campaign.goal = _goal;
    //     campaign.deadline = block.timestamp + (_durationInDays * 1 days);
    //     campaign.encryptedMetadata = _encryptedMetadata;

    //     emit CampaignCreated(tokenId, msg.sender, _recipient, _goal, campaign.deadline);
    // }

    /**
     * @dev Renews a campaign by extending its deadline and optionally updating the goal.
     * @param _tokenId The token ID of the campaign.
     * @param _newDurationInDays The new duration of the campaign in days.
     * @param _newGoal The new funding goal (optional).
     */
    function renewCampaign(
        uint256 _tokenId,
        uint _newDurationInDays,
        uint _newGoal
    ) external {
        require(ownerOf(_tokenId) == msg.sender, "Only the campaign owner can renew the campaign");

        Campaign storage campaign = campaigns[_tokenId];
        require(block.timestamp >= campaign.deadline, "Campaign is still active and cannot be renewed yet");

        // Update the goal if a new goal is provided
        if (_newGoal > 0) {
            campaign.goal = _newGoal;
        }

        // Extend the deadline
        campaign.deadline = block.timestamp + (_newDurationInDays * 1 days);

        emit CampaignRenewed(_tokenId, campaign.goal, campaign.deadline);
    }

    /**
     * @dev Allows the recipient to update their public key for a specific campaign.
     * @param _tokenId The token ID of the campaign.
     * @param _newPublicKey The new public key for stealth address derivation.
     */
    function updateRecipientPublicKey(uint256 _tokenId, bytes memory _newPublicKey) external {
        Campaign storage campaign = campaigns[_tokenId];
        // require(campaign.recipient == msg.sender, "Only the recipient can update their public key");
        // require(campaign.creator == msg.sender, "Only the recipient can update their public key");
        require(_newPublicKey.length == 33 || _newPublicKey.length == 65, "Invalid public key format");

        campaign.recipientPublicKey = _newPublicKey;
    }

    /**
     * @dev Returns the time left for a campaign.
     * @param _tokenId The token ID of the campaign.
     */
    function timeLeft(uint256 _tokenId) public view returns (uint) {
        Campaign storage campaign = campaigns[_tokenId];
        require(block.timestamp < campaign.deadline, "Crowdfunding period has ended");
        return campaign.deadline - block.timestamp;
    }

    /**
     * @dev Checks if the goal of a campaign has been reached (off-chain tracking required).
     * @param _tokenId The token ID of the campaign.
     */
    function hasGoalReached(uint256 _tokenId) public view returns (bool) {
        Campaign storage campaign = campaigns[_tokenId];
        return campaign.raisedAmount >= campaign.goal;
    }
}