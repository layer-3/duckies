# Solidity API

## GenomeTestConsumer

Contract for testing Genome contract. NOT FOR USE IN PRODUCTION.

### getFlags

```solidity
function getFlags(uint256 genome) external pure returns (uint8)
```

Read flags gene from genome.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to get flags gene from. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | flags Flags gene. |

### getFlag

```solidity
function getFlag(uint256 genome, uint8 flag) external pure returns (bool)
```

Read specific bit mask flag from genome.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to read flag from. |
| flag | uint8 | Bit mask flag to read. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | value Value of the flag. |

### setFlag

```solidity
function setFlag(uint256 genome, uint8 flag, bool value) external pure returns (uint256)
```

Set specific bit mask flag in genome.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to set flag in. |
| flag | uint8 | Bit mask flag to set. |
| value | bool | Value of the flag. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | genome Genome with the flag set. |

### setGene

```solidity
function setGene(uint256 genome, uint8 gene, uint8 value) external pure returns (uint256)
```

Set `value` to `gene` in genome.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to set gene in. |
| gene | uint8 | Gene to set. |
| value | uint8 | Value to set. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | genome Genome with the gene set. |

### getGene

```solidity
function getGene(uint256 genome, uint8 gene) external pure returns (uint8)
```

Get `gene` value from genome.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genome | uint256 | Genome to get gene from. |
| gene | uint8 | Gene to get. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | geneValue Gene value. |

### maxGene

```solidity
function maxGene(uint256[] genomes, uint8 gene) external pure returns (uint8)
```

Get largest value of a `gene` in `genomes`.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Genomes to get gene from. |
| gene | uint8 | Gene to get. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | maxValue Largest value of a `gene` in `genomes`. |

### geneValuesAreEqual

```solidity
function geneValuesAreEqual(uint256[] genomes, uint8 gene) external pure returns (bool)
```

Check if values of `gene` in `genomes` are equal.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Genomes to check. |
| gene | uint8 | Gene to check. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | isEqual True if values of `gene` in `genomes` are equal, false otherwise. |

### geneValuesAreUnique

```solidity
function geneValuesAreUnique(uint256[] genomes, uint8 gene) external pure returns (bool)
```

Check if values of `gene` in `genomes` are unique.

_Expose for testing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| genomes | uint256[] | Genomes to check. |
| gene | uint8 | Gene to check. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | isUnique True if values of `gene` in `genomes` are unique, false otherwise. |

