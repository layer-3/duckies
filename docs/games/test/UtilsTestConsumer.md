# Solidity API

## UtilsTestConsumer

Contract for testing Utils contract. NOT FOR USE IN PRODUCTION.

### shiftSeedSlice

```solidity
function shiftSeedSlice(bytes32 seed) external pure returns (bytes3, bytes32)
```

Perform circular shift on the seed by 3 bytes to the left, and returns the shifted slice and the updated seed.

_Expose internal shiftSeedSlice function. User of this contract must keep track of used bit slices to avoid reusing them._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seed | bytes32 | Seed to shift and extract the shifted slice from. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes3 | bitSlice Shifted bit slice. |
| [1] | bytes32 | updatedSeed Shifted seed. |

### max

```solidity
function max(bytes3 bitSlice, uint24 max_) external pure returns (uint256)
```

Extracts a number from the bit slice in range [0, max).

_Expose internal randomNumber function. Extracts a number from the bit slice in range [0, max)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| bitSlice | bytes3 | Bit slice to extract the number from. |
| max_ | uint24 | Max number to extract. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Extracted number in range [0, max). |

### randomWeightedNumber

```solidity
function randomWeightedNumber(uint32[] weights, bytes3 bitSlice) external pure returns (uint256)
```

Generates a weighted random number given the `weights` array in range [0, weights.length).

_Expose internal randomWeightedNumber function. Number `x` is generated with probability `weights[x] / sum(weights)`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| weights | uint32[] | Array of weights. |
| bitSlice | bytes3 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Random number in range [0, weights.length). |

### requireCorrectSigner

```solidity
function requireCorrectSigner(bytes encodedData, bytes signature, address signer) external pure
```

Check that `signatures is `encodedData` signed by `signer`. Reverts if not.

_Expose internal requireCorrectSigner function. Check that `signatures is `encodedData` signed by `signer`. Reverts if not._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| encodedData | bytes | Data to check. |
| signature | bytes | Signature to check. |
| signer | address | Address of the signer. |

