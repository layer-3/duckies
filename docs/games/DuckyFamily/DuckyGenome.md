# Solidity API

## DuckyGenome

Library for generating Duckies genomes.

_Contains functions for generating Duckies genomes._

### ducklingCollectionId

```solidity
uint8 ducklingCollectionId
```

_constants must be duplicated both here and in DuckyFamilyV1 as Solidity does not see Library constants as constants, see https://github.com/ethereum/solidity/issues/12248_

### zombeakCollectionId

```solidity
uint8 zombeakCollectionId
```

### mythicCollectionId

```solidity
uint8 mythicCollectionId
```

### RARITIES_NUM

```solidity
uint8 RARITIES_NUM
```

### collectionGeneIdx

```solidity
uint8 collectionGeneIdx
```

### rarityGeneIdx

```solidity
uint8 rarityGeneIdx
```

### flagsGeneIdx

```solidity
uint8 flagsGeneIdx
```

### generativeGenesOffset

```solidity
uint8 generativeGenesOffset
```

### generateAndSetGenes

```solidity
function generateAndSetGenes(uint256 genome, uint8 collectionId, uint8[] geneValuesNum, uint32 geneDistributionTypes, bytes32 seed) internal pure returns (uint256)
```

Generates and sets genes to genome. Emits GenomeReturned event.

_Generates and sets genes to genome. Emits GenomeReturned event._

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
function generateAndSetGene(uint256 genome, uint8 geneIdx, uint8 geneValuesNum, enum IDuckyFamily.GeneDistributionTypes distrType, bytes3 bitSlice) internal pure returns (uint256)
```

Generate and set a gene with `geneIdx` to `genome`.

_Generate and set a gene with `geneIdx` to `genome`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to set a gene to. |
| geneIdx | uint8 | Gene index. |
| geneValuesNum | uint8 | Number of gene values. |
| distrType | enum IDuckyFamily.GeneDistributionTypes | Gene distribution type. |
| bitSlice | bytes3 | Random bit slice to generate a gene from. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | genome Genome with set gene. |

### requireGenomesSatisfyMelding

```solidity
function requireGenomesSatisfyMelding(uint256[] genomes) internal pure
```

Check that `genomes` satisfy melding rules. Reverts if not.

_Check that `genomes` satisfy melding rules. Reverts if not._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Array of genomes to check. |

### isCollectionMutating

```solidity
function isCollectionMutating(enum IDuckyFamily.Rarities rarity, uint32[] mutationChances, bytes3 bitSlice) internal pure returns (bool)
```

Randomize if collection is mutating.

_Randomize if collection is mutating._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rarity | enum IDuckyFamily.Rarities | Rarity of the collection. |
| mutationChances | uint32[] | Array of mutation chances for each rarity. |
| bitSlice | bytes3 | Bit slice to use for randomization. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | isMutating True if mutating, false otherwise. |

### meldGenes

```solidity
function meldGenes(uint256[] genomes, uint8 gene, uint8 maxGeneValue, enum IDuckyFamily.GeneDistributionTypes geneDistrType, uint32[] mutationChance, uint32[] inheritanceChances, bytes3 bitSlice) internal pure returns (uint8)
```

Meld `gene` from `genomes` into a new gene value.

_Meld `gene` from `genomes` into a new gene value. Gene mutation and inheritance are applied._

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

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | geneValue Melded gene value. |

### getDistributionType

```solidity
function getDistributionType(uint32 distributionTypes, uint8 idx) internal pure returns (enum IDuckyFamily.GeneDistributionTypes)
```

Get gene distribution type.

_Get gene distribution type._

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
function generateUnevenGeneValue(uint8 valuesNum, bytes3 bitSlice) internal pure returns (uint8)
```

Generate uneven gene value given the maximum number of values.

_Generate uneven gene value using reciprocal distribution described below._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| valuesNum | uint8 | Maximum number of gene values. |
| bitSlice | bytes3 | Bit slice to use for randomization. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | geneValue Gene value. |

### calcConfigPeculiarity

```solidity
function calcConfigPeculiarity(uint8[] geneValuesNum, uint32 geneDistrTypes) internal pure returns (uint16)
```

Calculate max peculiarity for a supplied config.

_Sum up number of uneven gene values._

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
function calcPeculiarity(uint256 genome, uint8 genesNum, uint32 geneDistrTypes) internal pure returns (uint16)
```

Calculate peculiarity for a given genome.

_Sum up number of uneven gene values._

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
function calcUniqIdGenerationParams(uint16 pivotalUniqId, uint16 maxUniqId, uint16 mythicDispersion) internal pure returns (uint16 leftEndUniqId, uint16 uniqIdSegmentLength)
```

Calculate `leftEndUniqId` and `uniqIdSegmentLength` for UniqId generation.

_Then UniqId is generated by adding a random number [0, `uniqIdSegmentLength`) to `leftEndUniqId`._

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

