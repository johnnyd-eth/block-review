import { AbiItem } from 'web3-utils'

export const blockReviewContractAddress = '0x20265bad940A26d81193a3113087C96cc52eb2f1'
export const blockReviewAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "ProjectAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "reviewer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rating",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "comments",
				"type": "string"
			}
		],
		"name": "ReviewAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_comments",
				"type": "string"
			}
		],
		"name": "addReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "getReviewCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "getReviews",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "projectCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "projectReviews",
		"outputs": [
			{
				"internalType": "address",
				"name": "reviewer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comments",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reviewCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as AbiItem[]
