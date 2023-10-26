# Solidity API

## Utils

Utility functions for games, that include pseudo random number generation, signature verification, etc.

Pseudo random number generation is based on the bitSlices, which are part of a seed created in `Seeding.sol`.

### InvalidWeights

```solidity
error InvalidWeights(uint32[] weights)
```

Invalid weights error while trying to generate a weighted random number.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| weights | uint32[] | Empty weights array. |

### shiftSeedSlice

```solidity
function shiftSeedSlice(bytes32 seed) internal pure returns (bytes3, bytes32)
```

Perform circular shift on the seed by 3 bytes to the left, and returns the shifted slice and the updated seed.

_User of this contract must keep track of used bit slices to avoid reusing them._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seed | bytes32 | Seed to shift and extract the shifted slice from. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes3 | bitSlice Shifted bit slice. |
| [1] | bytes32 | updatedSeed Shifted seed. |

### randomNumber

```solidity
function randomNumber(bytes3 bitSlice, uint24 max) internal pure returns (uint24)
```

Extracts a number from the bit slice in range [0, max).

_Extracts a number from the bit slice in range [0, max)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| bitSlice | bytes3 | Bit slice to extract the number from. |
| max | uint24 | Max number to extract. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint24 | Extracted number in range [0, max). |

### randomWeightedNumber

```solidity
function randomWeightedNumber(uint32[] weights, bytes3 bitSlice) internal pure returns (uint8)
```

Generates a weighted random number in range [0, weights.length).

_Number `x` is generated with probability `weights[x] / sum(weights)`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| weights | uint32[] | Array of weights. |
| bitSlice | bytes3 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | Random number in range [0, weights.length). |

### sum

```solidity
function sum(uint32[] numbers) internal pure returns (uint256 res)
```

Calculates sum of all elements in array.

_Calculates sum of all elements in array._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| numbers | uint32[] | Array of numbers. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| res | uint256 | Sum of all elements in array. |

### requireCorrectSigner

```solidity
function requireCorrectSigner(bytes encodedData, bytes signature, address signer) internal pure
```

Check that `signatures is `encodedData` signed by `signer`. Reverts if not.

_Check that `signatures is `encodedData` signed by `signer`. Reverts if not._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| encodedData | bytes | Data to check. |
| signature | bytes | Signature to check. |
| signer | address | Address of the signer. |

