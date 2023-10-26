# Solidity API

## DuckyGenomeTestConsumer

Contract for testing DuckyGenome library. NOT FOR USE IN PRODUCTION.

_Exposes internal functions for testing. Does not mark some functions as pure to measure gas usage._

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

### GeneReturned

```solidity
event GeneReturned(uint8 gene)
```

Event emitted when a gene is generated.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gene | uint8 | Generated gene. |

### BoolReturned

```solidity
event BoolReturned(bool returnedBool)
```

Event emitted when a bool is returned.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| returnedBool | bool | Returned bool. |

### Uint8Returned

```solidity
event Uint8Returned(uint8 returnedUint8)
```

Event emitted when a uint8 is returned.

_Used for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| returnedUint8 | uint8 | Returned uint8. |

### generateAndSetGenes

```solidity
function generateAndSetGenes(uint256 genome, uint8 collectionId, uint8[] geneValuesNum, uint32 geneDistributionTypes, bytes32 seed) external
```

Generates and sets genes to genome. Emits GenomeReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to set genes to. |
| collectionId | uint8 | Collection Id to generate genes for. |
| geneValuesNum | uint8[] | Number of gene values for each gene. |
| geneDistributionTypes | uint32 | Gene distribution types. |
| seed | bytes32 | Seed for randomization. |

### generateAndSetGene

```solidity
function generateAndSetGene(uint256 genome, uint8 geneIdx, uint8 geneValuesNum, enum IDuckyFamily.GeneDistributionTypes distrType, bytes3 bitSlice) external
```

Generates and sets gene to genome. Emits GenomeReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to set gene to. |
| geneIdx | uint8 | Index of gene to set. |
| geneValuesNum | uint8 | Number of gene values. |
| distrType | enum IDuckyFamily.GeneDistributionTypes | Gene distribution type. |
| bitSlice | bytes3 | Bit slice for randomization. |

### requireGenomesSatisfyMelding

```solidity
function requireGenomesSatisfyMelding(uint256[] genomes) external pure
```

Checks if genomes satisfy melding, reverting if not.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Genomes to check. |

### isCollectionMutating

```solidity
function isCollectionMutating(enum IDuckyFamily.Rarities rarity, uint32[] mutationChances, bytes3 bitSlice) external
```

Randomize if collection is mutating. Emits BoolReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rarity | enum IDuckyFamily.Rarities | Rarity of the collection. |
| mutationChances | uint32[] | Array of mutation chances for each rarity. |
| bitSlice | bytes3 | Bit slice to use for randomization. |

### meldGenes

```solidity
function meldGenes(uint256[] genomes, uint8 gene, uint8 maxGeneValue, enum IDuckyFamily.GeneDistributionTypes geneDistrType, uint32[] mutationChance, uint32[] inheritanceChances, bytes3 bitSlice) external
```

Meld `gene` from `genomes` into a new gene value. Emits GeneReturned event.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Array of genomes to meld. |
| gene | uint8 | Gene to be meld. |
| maxGeneValue | uint8 | Max gene value. |
| geneDistrType | enum IDuckyFamily.GeneDistributionTypes | Gene distribution type. |
| mutationChance | uint32[] | Mutation chance. Represented as [chance of no mutation, chance of mutation] in per mil. |
| inheritanceChances | uint32[] | Array of inheritance chances for each rarity. |
| bitSlice | bytes3 | Bit slice to use for randomization. |

### getDistributionType

```solidity
function getDistributionType(uint32 distributionTypes, uint8 idx) external pure returns (enum IDuckyFamily.GeneDistributionTypes)
```

Get gene distribution type.

_Exposed for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distributionTypes | uint32 | Distribution types. |
| idx | uint8 | Index of the gene. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum IDuckyFamily.GeneDistributionTypes | Gene distribution type. |

### generateUnevenGeneValue

```solidity
function generateUnevenGeneValue(uint8 valuesNum, bytes3 bitSlice) external
```

Generate uneven gene value. Emits Uint8Returned event.

_Exposed for testing. Not pure to measure gas consumption._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| valuesNum | uint8 | Number of gene values. |
| bitSlice | bytes3 | Bit slice for randomization. |

### calcConfigPeculiarity

```solidity
function calcConfigPeculiarity(uint8[] geneValuesNum, uint32 geneDistrTypes) external pure returns (uint16)
```

Calculate max peculiarity for a supplied config.

_Exposed for testing. Sum up number of uneven gene values._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| geneValuesNum | uint8[] | Array of number of gene values for each gene. |
| geneDistrTypes | uint32 | Gene distribution types. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | maxPeculiarity Max peculiarity. |

### calcPeculiarity

```solidity
function calcPeculiarity(uint256 genome, uint8 genesNum, uint32 geneDistrTypes) external pure returns (uint16)
```

Calculate peculiarity for a given genome.

_Exposed for testing. Sum up number of uneven gene values._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome. |
| genesNum | uint8 | Number of genes. |
| geneDistrTypes | uint32 | Gene distribution types. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | peculiarity Peculiarity. |

### calcUniqIdGenerationParams

```solidity
function calcUniqIdGenerationParams(uint16 pivotalUniqId, uint16 maxUniqId, uint16 mythicDispersion) external pure returns (uint16 leftEndUniqId, uint16 uniqIdSegmentLength)
```

Calculate `leftEndUniqId` and `uniqIdSegmentLength` for UniqId generation.

_Exposed for testing. Then UniqId is generated by adding a random number [0, `uniqIdSegmentLength`) to `leftEndUniqId`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| pivotalUniqId | uint16 | Pivotal UniqId. |
| maxUniqId | uint16 | Max UniqId. |
| mythicDispersion | uint16 | Half of the segment length in which mythic UniqIds are generated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| leftEndUniqId | uint16 | Left end of the UniqId segment. |
| uniqIdSegmentLength | uint16 | Length of the UniqId segment. |

