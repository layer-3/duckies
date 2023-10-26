# Solidity API

## Seeding

A contract that provides seeds for pseudo random number generation.
Seed is created from the salt, pepper, nonce, sender address, and block timestamp.
Seed is divided into 32 bit slices, and each slice is later used to generate a random number.
Seed user must keep track of used bit slices to avoid reusing them.
Salt is a data based on block timestamp and msg sender, and is calculated every time a seed is generated.
Pepper is a random data changed periodically by external entity.
Nonce is incremented every time a random number is generated.

### _setPepper

```solidity
function _setPepper(bytes32 newPepper) internal
```

Sets the pepper.

_Pepper is a random data changed periodically by external entity._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newPepper | bytes32 | New pepper. |

### _randomSeed

```solidity
function _randomSeed() internal returns (bytes32)
```

Creates a new seed based on the salt, pepper, nonce, sender address, and block timestamp.

_Creates a new seed based on the salt, pepper, nonce, sender address, and block timestamp._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | New seed. |

