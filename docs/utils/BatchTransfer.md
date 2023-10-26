# Solidity API

## BatchTransfer

### TransferFailed

```solidity
error TransferFailed(address recipient)
```

_Emitted when a token transfer fails._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address of the recipient that failed to receive the tokens. |

### batchTransfer

```solidity
function batchTransfer(address tokenAddress, address[] recipients, uint256 amount) external
```

Transfers `amount` tokens of `tokenAddress` to each of the `recipients`.

_Can only be called by the contract owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenAddress | address | The address of the ERC20 token to be transferred. |
| recipients | address[] | The addresses of the recipients. |
| amount | uint256 | The amount of tokens to be transferred to each recipient. |

### receive

```solidity
receive() external payable
```

Receives ETH transfers.

_Required to receive ETH transfers._

### withdraw

```solidity
function withdraw(address tokenAddress) external
```

Withdraws all tokens of `tokenAddress` from the contract.

_Can only be called by the contract owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenAddress | address | The address of the ERC20 token to be withdrawn. |

### _getBalance

```solidity
function _getBalance(address tokenAddress) internal view returns (uint256)
```

Returns the balance of `tokenAddress` held by the contract.

_Can only be called by the contract owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenAddress | address | The address of the ERC20 token to be withdrawn. |

### _transfer

```solidity
function _transfer(address tokenAddress, address recipient, uint256 amount) internal returns (bool success)
```

Transfers `amount` tokens of `tokenAddress` to the sender.

_Can only be called by the contract owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenAddress | address | The address of the token to be transferred. |
| recipient | address |  |
| amount | uint256 | The amount of tokens to be transferred. |

