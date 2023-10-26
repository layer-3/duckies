# Solidity API

## TESTDuckyFamilyV1

Contract for testing DuckyFamilyV1 contract. NOT FOR USE IN PRODUCTION.

### GenomeReturned

```solidity
event GenomeReturned(uint256 genome)
```

Event emitted when a genome is generated.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Generated genome. |

### constructor

```solidity
constructor(address duckiesAddress, address ducklingsAddress, address treasureVaultAddress) public
```

### setRarityChances

```solidity
function setRarityChances(uint32[] chances) external
```

Sets the rarity chances.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| chances | uint32[] | Array of rarity chances. |

### setCollectionMutationChances

```solidity
function setCollectionMutationChances(uint32[] chances) external
```

Sets the collection mutation chances.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| chances | uint32[] | Array of collection mutation chances. |

### setGeneMutationChance

```solidity
function setGeneMutationChance(uint32 chance) external
```

Sets the gene mutation chances.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| chance | uint32 | Chance of gene mutation. |

### setGeneInheritanceChances

```solidity
function setGeneInheritanceChances(uint32[] chances) external
```

Sets the gene inheritance chances.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| chances | uint32[] | Array of gene inheritance chances. |

### generateGenome

```solidity
function generateGenome(uint8 collectionId, bytes32 seed) external
```

Generates a genome. Emits GenomeReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collectionId | uint8 | Collection Id to generate genome for. |
| seed | bytes32 | Seed for randomization. |

### generateMythicGenome

```solidity
function generateMythicGenome(uint256[] genomes, uint16 maxPeculiarity, uint16 mythicAmount, bytes32 seed) external
```

Generates a mythic genome. Emits GenomeReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Genomes to generate mythic genome from. |
| maxPeculiarity | uint16 | Max peculiarity for mythic genome. |
| mythicAmount | uint16 | Amount of mythic genes to generate. |
| seed | bytes32 | Seed for randomization. |

### meldGenomes

```solidity
function meldGenomes(uint256[] genomes, bytes32 seed) external
```

Melds genomes. Emits GenomeReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Genomes to meld. |
| seed | bytes32 | Seed for randomization. |

