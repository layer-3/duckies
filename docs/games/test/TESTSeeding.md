# Solidity API

## TESTSeeding

### SeedGenerated

```solidity
event SeedGenerated(bytes32 seed)
```

Event emitted when a seed is generated.

_Event emitted when a seed is generated._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| seed | bytes32 | Seed generated by Random contract. |

### randomSeed

```solidity
function randomSeed() external
```

Creates a new seed based on the salt, pepper, nonce, sender address, and block timestamp. Emits SeedGenerated event.

_Expose internal _randomSeed function._

